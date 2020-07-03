# == Schema Information
#
# Table name: beers
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  style       :string           not null
#  description :text
#  abv         :float
#  brewery_id  :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  ibu         :float
#
class Beer < ApplicationRecord
  validates :name, :style, :brewery_id, presence: true

  has_one_attached :photo
end
