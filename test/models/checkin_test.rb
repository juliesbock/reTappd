# == Schema Information
#
# Table name: checkins
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  beer_id    :integer          not null
#  rating     :float
#  body       :text
#  location   :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
require 'test_helper'

class CheckinTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
