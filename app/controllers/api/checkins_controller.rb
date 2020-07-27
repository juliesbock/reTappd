class Api::CheckinsController < ApplicationController
  def index
    @checkins = Checkin.all.includes(:beer, :user, :brewery)
    render :index
  end

  def show
    @checkin = Checkin.find_by(id: params[:id])
    render :show
  end

  def create
    @beer = Beer.find_by(id: params[:checkin][:beer_id])
    @checkin = @beer.checkins.new(checkin_params)
    # @checkin.user_id = current_user.id

    if @checkin.save!
      render :show
    else
      render json: @checkin.errors.full_messages, status: 422
    end
  end

  def update
    @checkin = Checkin.find(params[:id])

    if @checkin.update(checkin_params)
      render :show
    else
      render json: @checkin.errors.full_messages, status: 422
    end
  end

  def destroy
    @checkin = Checkin.find_by(id: params[:id])
    @checkin.destroy
  end

  private
    def checkin_params
      params.require(:checkin).permit(:user_id, :beer_id, :rating, :body, :location, :photo)
    end
end














# if params[:brewery_id] != ""
    #   brewery = Brewery.find(params[:brewery_id])
    #   @checkins = brewery.checkins.includes(:beer, :user, :brewery)
    # elsif params[:beer_id] != ""
    #   @checkins = Checkin.where(beer_id: params[:beer_id]).includes(:beer, :user, :brewery)
    # elsif params[:user_id] != ""
    #   @checkins = Checkin.where(user_id: params[:user_id]).includes(:beer, :brewery)
    # else
      # @checkins = Checkin.all.includes(:beer, :user, :brewery)
    # end