class AddClazznameToAdmins < ActiveRecord::Migration[5.1]
  def change
    add_column :admins, :clazzname, :string
  end
end
