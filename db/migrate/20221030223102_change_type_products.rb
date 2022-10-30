class ChangeTypeProducts < ActiveRecord::Migration[7.0]
  def change
    rename_column :products, :type, :category
  end
end
