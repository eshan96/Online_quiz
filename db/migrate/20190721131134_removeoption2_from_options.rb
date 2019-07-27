class Removeoption2FromOptions < ActiveRecord::Migration[5.1]
  def change
    remove_column :options, :option2
  end
end
