class ChangeColumnName < ActiveRecord::Migration[5.1]
  def change

    rename_column :clazzs, :name, :clazzname
  end
end
