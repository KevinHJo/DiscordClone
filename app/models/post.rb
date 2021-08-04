# == Schema Information
#
# Table name: posts
#
#  id         :bigint           not null, primary key
#  body       :string           not null
#  channel_id :integer          not null
#  author_id  :integer          not null
#  parent_id  :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Post < ApplicationRecord
    validates :body, :channel_id, :author_id, presence: true

    belongs_to :author,
        class_name: :User,
        primary_key: :id,
        foreign_key: :author_id

    belongs_to :parent, optional: true,
        class_name: :Post,
        primary_key: :id,
        foreign_key: :parent_id
end
