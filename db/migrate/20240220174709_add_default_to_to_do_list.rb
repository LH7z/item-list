class AddDefaultToToDoList < ActiveRecord::Migration[7.0]
  def change
    add_column :to_do_lists, :status, :integer, default: 1
  end
end
