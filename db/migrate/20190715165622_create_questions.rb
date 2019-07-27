class CreateQuestions < ActiveRecord::Migration[5.1]
  def change
    create_table :questions do |t|
      t.text :content
      t.integer :subject_id
      t.integer :class_id

      t.timestamps
    end
  end
end
