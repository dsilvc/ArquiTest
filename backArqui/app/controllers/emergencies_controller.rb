class EmergenciesController < ApplicationController
  #before_action :authenticate_user!

  def index
    render json: Emergency.all, status: :ok
  end

  def show
    id = params[:id]
    emerg = Emergency.find(params[:id])
    # Acceder a la API de Workers con GET: {API}/calculate/:id
    url = "http://127.0.0.1:8000/calculate/#{id}"
    answer = JSON.parse(RestClient.get(url))
    render json: {job: answer, emergency: emerg}, status: :ok
  end
end
