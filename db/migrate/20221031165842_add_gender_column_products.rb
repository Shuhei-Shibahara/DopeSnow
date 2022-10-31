class AddGenderColumnProducts < ActiveRecord::Migration[7.0]
  def change
      add_column :products, :gender, :string, null: false
      add_index :products, :gender
  end
end
