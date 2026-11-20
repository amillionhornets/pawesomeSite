defmodule BackendWeb.TransferChannel do
  use BackendWeb, :channel

  @impl true
  def join("transfer:" <> room_id, _payload, socket) do
    socket = assign(socket, :room_id, room_id)

    {:ok, socket}
  end

  @impl true
  def handle_in("message", %{"message" => message, "sender" => sender}, socket) do
    broadcast!(socket, "message", %{
      message: message,
      sender: sender
    })

    {:noreply, socket}
  end
end
