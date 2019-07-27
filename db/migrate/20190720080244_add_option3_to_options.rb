class AddOption3ToOptions < ActiveRecord::Migration[5.1]
  def change
    add_column :options, :option3, :text
  end
end
