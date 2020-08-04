defmodule OrcasiteWeb.PageController do
  use OrcasiteWeb, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end


  def login(conn, _params) do
    render conn, "login.html"
  end


  def submitfeedback(conn, _params) do
    render conn, "submitfeedback.html"
  end


  def listen(conn, _params) do
    render conn, "listen.html"
  end
end
