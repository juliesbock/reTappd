json.extract! beer, :id, :name, :style, :description, :abv, :ibu, :brewery_id

if beer.photo.attached?
    json.photo url_for(beer.photo)
end

json.checkins do
    json.array! beer.checkins, :id
end

# json.userCheckins do
#     json.array! beer.checkins, :user_id
# end

# json.avgRating beer.avg_rating(beer)
# json.brewName beer.brewery.name
