//show
export const fetchBrewery = brewId => {
  return $.ajax({
    method: `GET`,
    url: `/api/breweries/${brewId}`
  })
};

//index
export const fetchBreweries = () => (
  $.ajax({
    method: `GET`,
    url: `/api/breweries/`
  })
);

//create
export const createBrewery = (brewery) => (
  $.ajax({
    method: `POST`,
    url: `/api/breweries/${brewery.id}`,
    data: {brewery}
  })
);

//update
export const updateBrewery = (brewery) => (
  $.ajax({
    method: `PATCH`,
    url: `/api/breweries/${brewery.id}`,
    data: {brewery}
  })
);