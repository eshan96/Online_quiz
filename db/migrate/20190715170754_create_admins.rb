class CreateAdmins < ActiveRecord::Migration[5.1]
  def change
    create_table :admins do |t|
      t.integer :question_id
      t.integer :subject_id
      t.integer :clazz_id
      t.integer :option_id
      t.integer :answer_id

      t.timestamps
    end
  end
end
