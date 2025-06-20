class UsersController < ApplicationController
  before_action :set_user, only: [:follow, :unfollow, :friends_request, :friends]

  def index
    @users = User.where.not(id: current_user.id)
  end

  def follow
    if current_user.follow(@user.id)
      respond_to do |format|
        format.html { redirect_to users_path }
        format.js
      end
    end
  end

  def unfollow
    if current_user.unfollow(@user.id)
      respond_to do |format|
        format.html { redirect_to users_path }
        format.js { render action: :follow }
      end
    end
  end

  def friends
    @friends = @user.friends
  end

  def friends_request
    @followers = @user.followers - (@user.friends)
  end

  private

  def set_user
    @user = User.find(params[:id])
  end
end
