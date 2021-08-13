# == Schema Information
#
# Table name: servers
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  owner_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Server < ApplicationRecord
    validates :name, :owner_id, presence: true

    belongs_to :owner,
        class_name: :User,
        foreign_key: :owner_id
    has_many :server_users
    has_many :users, through: :server_users
    has_many :channels
end
