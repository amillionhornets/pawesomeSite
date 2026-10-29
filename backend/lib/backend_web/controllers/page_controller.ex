defmodule BackendWeb.PageController do
  use BackendWeb, :controller

  def home(conn, _params) do
    render(conn, :home)
  end
end
