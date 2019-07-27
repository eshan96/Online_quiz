class AddOption1ToOptions < ActiveRecord::Migration[5.1]
  def change
    add_column :options, :option1, :text
  end
end
