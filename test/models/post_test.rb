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
require 'test_helper'

class PostTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
