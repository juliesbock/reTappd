
class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render :show
    else
      render json: ['Please enter valid credentials'], status: 401
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :password)
  end
end
