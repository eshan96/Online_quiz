class AddOption4ToOptions < ActiveRecord::Migration[5.1]
  def change
    add_column :options, :option4, :text
  end
end
