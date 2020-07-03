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
class Checkin < ApplicationRecord
  validates :beer_id, :user_id, presence: true
  validates :rating, numericality: {greater_than_or_equal_to: 0.0}
  validates :rating, numericality: {less_than_or_equal_to: 5.0}

  has_one_attached :photo

  belongs_to :user
  belongs_to :beer

  has_one :brewery,
    through: :beer,
    source: :brewery

end
