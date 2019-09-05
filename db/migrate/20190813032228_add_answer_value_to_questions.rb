class AddAnswerValueToQuestions < ActiveRecord::Migration[5.1]
  def change
    add_column :questions, :answer_value, :string
  end
end
