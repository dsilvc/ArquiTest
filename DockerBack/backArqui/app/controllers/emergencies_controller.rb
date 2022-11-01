class EmergenciesController < ApplicationController
  
  def index
    render json: Emergency.all, status: :ok
  end

  def show
    id = params[:id]
    # Acceder a la API de Workers con GET: {API}/calculate/:id
    url = "http://workers:8000/calculate/#{id}"
    answer = JSON.parse(RestClient.get(url))
    render json: answer, status: :ok
  end
end
