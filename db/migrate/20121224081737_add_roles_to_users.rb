class AddRolesToUsers < ActiveRecord::Migration
  def change
    add_column :users, :Roles, :string
  end
end
