class AddUsersToToDoList < ActiveRecord::Migration[7.0]
  def change
    add_reference :to_do_lists, :user, foreign_key: true
  end
end
