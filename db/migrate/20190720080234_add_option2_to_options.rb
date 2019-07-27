class AddOption2ToOptions < ActiveRecord::Migration[5.1]
  def change
    add_column :options, :option2, :text
  end
end
