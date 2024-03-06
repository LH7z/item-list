class PagesController < ApplicationController
  skip_before_action :authenticate_user!

  def home
  end

  def about
  end

  def friends
    @friends = current_user.friends
  end
end
