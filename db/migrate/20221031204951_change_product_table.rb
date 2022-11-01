class ChangeProductTable < ActiveRecord::Migration[7.0]
  def change
    remove_column :products, :size, :string
    remove_column :products, :color, :string
  end
end
