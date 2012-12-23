class AddLowestclicksL3ColumnToUsers < ActiveRecord::Migration
  def change
    add_column :users, :LowestClicksL3, :integer
  end
end
