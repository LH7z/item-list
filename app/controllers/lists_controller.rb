class ListsController < ApplicationController
  before_action :set_list, only: %i[show destroy]

  def index
    @lists = List.where(user_id: current_user)
  end

  def show
  end

  def destroy

    @list.destroy
    redirect_to lists_path, notice: "list was sucessfully destroyed."
  end

  def new
    @lists = List.new
    @user = current_user
  end

  def create
    @lists = List.new(list_params)
    @lists.user = current_user
    @lists.items = params[:items]

    if @lists.save
      redirect_to lists_path, notice: "project was successfully created."
    else
      render :new, status: :unprocessable_entity
    end
  end

  private

  def set_list
    @list = List.find(params[:id])
  end

  def list_params
    params.require(:list).permit(:title, :user_id)
  end

end
