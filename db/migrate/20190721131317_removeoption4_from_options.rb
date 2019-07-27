class Removeoption4FromOptions < ActiveRecord::Migration[5.1]
  def change
    remove_column :options, :option4
  end
end
