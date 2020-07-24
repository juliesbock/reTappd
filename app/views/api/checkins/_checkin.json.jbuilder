json.extract! checkin, :id, :user_id, :beer_id, :rating, :body, :location, :created_at

if checkin.photo.attached?
    json.imgUrl url_for(checkin.photo)
end
