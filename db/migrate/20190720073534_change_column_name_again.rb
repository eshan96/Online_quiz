class ChangeColumnNameAgain < ActiveRecord::Migration[5.1]
  def change
    rename_column :clazzs, :clazzname, :clazz_name
  end
end
