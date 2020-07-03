# == Schema Information
#
# Table name: breweries
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  location    :string           not null
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Brewery < ApplicationRecord
  validates :name, :location, presence: true
  validates :name, uniqueness: true

  has_one_attached :photo

  has_many :beers
  has_many :checkins,
    through: :beers,
    source: :checkins

  def self.avg_rating(brewery)
    sum = 0.0
    brewery.checkins.each do |checkin|
      sum += checkin.rating
    end

    (sum / brewery.checkins.length)
  end

  def self.count_ratings(brewery)
    brewery.checkins.length
  end

end
