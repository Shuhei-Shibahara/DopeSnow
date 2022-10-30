class CreateProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :products do |t|
      t.string :name, null: false
      t.decimal :price, null: false
      t.text :description, null: false
      t.boolean :featured
      t.string :color, array: true, null: false
      t.string :size, array: true,  null: false

      t.timestamps
    end
    add_index :products, :name, unique: true
    add_index :products, :featured
  end
end
