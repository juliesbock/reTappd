class Api::BeersController < ApplicationController
  def index
    @beers = Beer.all
    render :index
  end

  def show
    @beer = Beer.find_by(id: params[:id])

    if @beer
      render :show
    else
      render json: @beer.errors.full_messages, status: 422
    end
  end
end
