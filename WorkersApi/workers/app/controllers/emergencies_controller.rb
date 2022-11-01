class EmergenciesController < ApplicationController

  def calculate
    id = params[:id]
    jobid = AddCalculatorWorker.perform_async(id)
    render json: {job_id: jobid}, status: :ok
  end

  def heartbeat
    render json: {status: true}, status: :ok
  end

  def job
    data = Sidekiq::Status::complete? params[:id]
    render json: {status: data}
  end

end
