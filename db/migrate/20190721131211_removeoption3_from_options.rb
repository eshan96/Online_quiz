class Removeoption3FromOptions < ActiveRecord::Migration[5.1]
  def change
    remove_column :options, :option3
  end
end
