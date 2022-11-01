class EmergenciesController < ApplicationController
  def index
    @emergs = Emergency.last(20)
  end

  def show
  end
end
