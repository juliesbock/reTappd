class Api::BreweriesController < ApplicationController
  def index
    @breweries = Breweries.all
    render :index
  end

  def show
    @brewery = Brewery.find_by(id: params[:id])

    if @brewery
      render :show
    else
      render json: @brewery.errors.full_messages, status: 422
    end
  end

  def create
  end

  def update
  end

  def destroy
  end
  
end

