class CreateOptions < ActiveRecord::Migration[5.1]
  def change
    create_table :options do |t|
      t.integer :question_id
      t.text :value

      t.timestamps
    end
  end
end
