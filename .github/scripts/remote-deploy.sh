#!/usr/bin/env bash
# Runs on the VM: builds a prod release from /opt/pawesome/src and swaps it in.
set -euo pipefail

eval "$(~/.local/bin/mise activate bash --shims)"
export MIX_ENV=prod
cd /opt/pawesome/src

mix deps.get --only prod
mix compile
mix assets.setup
mix assets.deploy
mix release --overwrite --path /opt/pawesome/release.new

rm -rf /opt/pawesome/release.old
if [ -d /opt/pawesome/release ]; then
  mv /opt/pawesome/release /opt/pawesome/release.old
fi
mv /opt/pawesome/release.new /opt/pawesome/release

sudo systemctl restart pawesome

for i in $(seq 1 15); do
  if curl -fsS -o /dev/null -H "X-Forwarded-Proto: https" -H "Host: www.amillionhornets.lol" http://127.0.0.1:4000/; then
    echo "App is up"
    exit 0
  fi
  sleep 2
done

echo "App failed to respond" >&2
sudo journalctl -u pawesome -n 50 --no-pager
exit 1
