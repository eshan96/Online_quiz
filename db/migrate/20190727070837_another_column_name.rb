class AnotherColumnName < ActiveRecord::Migration[5.1]
  def change
    rename_column :questions, :class_id, :clazz_id
  end
end
