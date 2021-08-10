class CreateChannelUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :channel_users do |t|
      t.integer :user_id, null: false
      t.integer :channel_id, null: false
      t.timestamps
    end

    add_index :channel_users, :user_id
    add_index :channel_users, :channel_id
  end
end
