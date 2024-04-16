class ToDoListsController < ApplicationController
  before_action :set_to_do, only: %i[edit destroy complete]
  def index
    @to_do = ToDoList.where(user_id: current_user)
  end

  def new
    @to_do = ToDoList.new
    @user = current_user
  end

  def create
    @to_do = ToDoList.new(to_do_params)
    @to_do.user = current_user

    if @to_do.save
      redirect_to to_do_lists_path, notice: "project was successfully created."
    else
      render :new, status: :unprocessable_entity
    end
  end

  def edit
  end

  def update
    @to_do = ToDoList.find(params[:id])
    @to_do.user = current_user

    if @to_do.update(to_do_params)
      @to_do.open!
      redirect_to to_do_lists_path
    else
      render 'lists/edit'
    end
  end

  def destroy
    @to_do.destroy
    redirect_to to_do_lists_path, notice: "task was sucessfully destroyed."
  end

  def complete
    @to_do.completed!
  end

  private

  def to_do_params
    params.require(:to_do_list).permit(:name, :user_id, :desc, :date, :completed)
  end

  def set_to_do
    @to_do = ToDoList.find(params[:id])
  end
end
