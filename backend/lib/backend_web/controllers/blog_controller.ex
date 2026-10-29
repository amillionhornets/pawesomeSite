defmodule BackendWeb.BlogController do
  use BackendWeb, :controller

  def blog(conn, _params) do
    render(conn, :blog)
  end
end
