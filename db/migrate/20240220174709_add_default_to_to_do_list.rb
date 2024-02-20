class AddDefaultToToDoList < ActiveRecord::Migration[7.0]
  def change
    add_column :to_do_lists, :completed, :boolean, default: false
    
  end
end
