class AddCompletedToItems < ActiveRecord::Migration[7.0]
  def change
    add_column :items, :completed, :boolean
    add_column :items, :name, :string
  end
end
