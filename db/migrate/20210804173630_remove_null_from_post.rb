class RemoveNullFromPost < ActiveRecord::Migration[5.2]
  def change
    change_column_null :posts, :parent_id, true
  end
end
