class Server < ApplicationRecord
    validates :servers, :name, :owner_id, presence: true

    belongs_to :owner,
        class_name: :User,
        foreign_key: :owner_id
end
