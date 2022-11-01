class AddSizeColorProducts < ActiveRecord::Migration[7.0]
  def change
    add_column :products, :size, :string, null: false
    add_column :products, :color, :string, null: false
  end
end
