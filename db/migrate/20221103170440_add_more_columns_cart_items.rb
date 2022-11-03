class AddMoreColumnsCartItems < ActiveRecord::Migration[7.0]
  def change
    add_column :cart_items, :price, :string, null: false
    add_column :cart_items, :size, :string, null: false
    add_column :cart_items, :gender, :string, null: false
    add_column :cart_items, :color, :string, null: false

  end
end
