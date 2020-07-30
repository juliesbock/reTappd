//show
export const fetchCheckin = (id) => (
  $.ajax({
    method: 'GET',
    url: `api/checkins/${id}`
  })
);

//index
export const fetchAllCheckins = () => (
  $.ajax({
    method: 'GET',
    url: `api/checkins/`
  })
);

//create
export const createCheckin = (checkin) => (
  $.ajax({
    method: 'POST',
    url: 'api/checkins',
    data: { checkin }
  })
)

//update
export const updateCheckin = (checkin) => (
  $.ajax({
    method: 'PATCH',
    url: `api/checkins/${id}`,
    data: { checkin }
  })
)

//delete
export const deleteCheckin = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `api/checkins/${id}`
  })
);


// api_checkins 
//   GET / api / checkins(.: format)           api / checkins#index
//   POST / api / checkins(.: format)          api / checkins#create
// api_checkin
//   GET / api / checkins /: id(.: format)     api / checkins#show
//   PATCH / api / checkins /: id(.: format)   api / checkins#update
//   PUT / api / checkins /: id(.: format)     api / checkins#update
//   DELETE / api / checkins /: id(.: format)  api / checkins#destroy