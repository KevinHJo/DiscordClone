class CreateChannels < ActiveRecord::Migration[5.2]
  def change
    create_table :channels do |t|
      
      t.string :name, null: false
      t.integer :server_id, null: false
      t.boolean :private, null: false
      t.timestamps
    end
    
    add_index :channels, :server_id
  end
end
