json.extract! brewery, :id, :name, :location, :description

if brewery.photo.attached?
  json.photo url_for(brewery.photo)
end

json.beers do
    json.array! brewery.beers, :id
end

json.checkins do
    json.array! brewery.checkins, :id
end