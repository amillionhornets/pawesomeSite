defmodule BackendWeb.PageController do
  use BackendWeb, :controller

  def home(conn, _params) do
    render(conn, :home)
  end

  def blog(conn, _params) do
    render(conn, :blog)
  end
end
