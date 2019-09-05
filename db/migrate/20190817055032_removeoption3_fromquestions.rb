class Removeoption3Fromquestions < ActiveRecord::Migration[5.1]
  def change
    remove_column :questions, :option3
  end
end
