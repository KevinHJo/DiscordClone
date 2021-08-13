# == Schema Information
#
# Table name: server_users
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  server_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class ServerUser < ApplicationRecord
    validates :user_id, :server_id, presence: true

    belongs_to :user
    belongs_to :server
end
