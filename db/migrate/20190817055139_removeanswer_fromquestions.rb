class RemoveanswerFromquestions < ActiveRecord::Migration[5.1]
  def change
    remove_column :questions, :answer
  end
end
