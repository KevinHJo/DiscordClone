# == Schema Information
#
# Table name: channels
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  server_id  :integer          not null
#  private    :boolean          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Channel < ApplicationRecord
    validates :name, :server_id, presence: true

    # belongs_to :server
    has_many :posts
    has_many :channel_users
    has_many :users, through: :channel_users
end