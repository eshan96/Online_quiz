class Removeoption1FromOptions < ActiveRecord::Migration[5.1]
  def change
    remove_column :options, :option1
  end
end
