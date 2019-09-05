class Removeoption4Fromquestions < ActiveRecord::Migration[5.1]
  def change
    remove_column :questions, :option4
  end
end
