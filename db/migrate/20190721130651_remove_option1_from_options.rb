class RemoveOption1FromOptions < ActiveRecord::Migration[5.1]
  def change
    remove_column :options, :Option1, :text
  end
end
