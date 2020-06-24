class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
      login(@user)
      render :show
    else
      flash.now[errors] = @user.errors.full_messages
      render :show
    end
  end

  def destroy
    if logged_in? 
      logout
      render json: '{}', status: 200
    else
      render json: 'not logged in', status: 404
    end
  end
  
end
