class CreateStudentclazzs < ActiveRecord::Migration[5.1]
  def change
    create_table :studentclazzs do |t|
      t.string :student_clazz_name

      t.timestamps
    end
  end
end
