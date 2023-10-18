class AddItemsToList < ActiveRecord::Migration[7.0]
  def change
    add_column :lists, :items, :text, array: true, default: []
  end
end
