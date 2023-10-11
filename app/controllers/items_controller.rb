class ItemsController < ApplicationController

  def new
    @item = Item.new
    @list = List.find(params[:list_id])
  end

  def create
    @item = Item.new(item_params)
    list = List.find(params[:list_id])
    @item.list = list

    if @item.save
      redirect_to list_path(list), notice: "project was successfully created."
    else
      render :new, status: :unprocessable_entity
    end
  end

  private

  def set_item
    @item = Item.find(params[:id])
  end

  def item_params
    params.require(:item).permit(:name)
  end
end
