class ChangeFriendsTableName < ActiveRecord::Migration[5.2]
  def change
    rename_table :friends, :user_friends
  end
end
