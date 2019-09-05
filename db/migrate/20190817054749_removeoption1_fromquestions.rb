class Removeoption1Fromquestions < ActiveRecord::Migration[5.1]
  def change
    remove_column :questions, :option1
  end
end
