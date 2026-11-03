defmodule BackendWeb.PageController do
  use BackendWeb, :controller

  def home(conn, _params) do
    render(conn, :home)
  end

  def blog(conn, _params) do
    render(conn, :blog)
  end

  def contact(conn, _params) do
    render(conn, :contact)
  end

  def resume(conn, _params) do
    render(conn, :resume)
  end

  def admin(conn, _params) do
    render(conn, :admin)
  end
end
