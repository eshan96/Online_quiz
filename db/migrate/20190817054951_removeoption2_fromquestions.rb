class Removeoption2Fromquestions < ActiveRecord::Migration[5.1]
  def change
    remove_column :questions, :option2
  end
end
