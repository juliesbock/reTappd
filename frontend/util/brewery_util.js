//show
export const fetchBrewery = brewId => (
  $.ajax({
    method: `GET`,
    url: `/api/breweries/${brewId}`
  })
);

//index
export const fetchBreweries = () => (
  $.ajax({
    method: `GET`,
    url: `/api/breweries/`
  })
);

export const createBrewery = (brewery) => (
  $.ajax({
    method: `CREATE`,
    url: `/api/breweries/${brewery.id}`,
    data: {brewery}
  })
);

export const updateBrewery = (brewery) => (
  $.ajax({
    method: `PATCH`,
    url: `/api/breweries/${brewery.id}`,
    data: {brewery}
  })
);



// export const deleteCheckin = (id) => (
//   $.ajax({
//     method: 'delete',
//     url: `api/checkins/${id}`
//   })
// )

