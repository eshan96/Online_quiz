class CreateAnswers < ActiveRecord::Migration[5.1]
  def change
    create_table :answers do |t|
      t.integer :option_id
      t.integer :question_id

      t.timestamps
    end
  end
end
