class ChangeStudentsToTests < ActiveRecord::Migration[5.1]
  def change
    rename_table :students, :tests    
  end
end
