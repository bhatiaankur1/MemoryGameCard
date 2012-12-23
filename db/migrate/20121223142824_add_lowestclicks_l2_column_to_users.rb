class AddLowestclicksL2ColumnToUsers < ActiveRecord::Migration
  def change
    add_column :users, :LowestClicksL2, :integer
  end
end
