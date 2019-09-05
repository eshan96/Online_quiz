class AddAnswerValueToAnswers < ActiveRecord::Migration[5.1]
  def change
    add_column :answers, :answer_value, :string
  end
end
