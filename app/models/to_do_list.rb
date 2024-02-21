class ToDoList < ApplicationRecord
  belongs_to :user
  enum status: {closed: 0 , open: 1, completed: 3}
end
