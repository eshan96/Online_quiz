class CreateStudents < ActiveRecord::Migration[5.1]
  def change
    create_table :students do |t|
      t.string :student_clazz_name
      t.string :student_subject
      t.string :student_name
      t.string :rollno

      t.timestamps
    end
  end
end
