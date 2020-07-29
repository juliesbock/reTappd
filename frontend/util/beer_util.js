//show
export const fetchBeer = beerId => (
  $.ajax({
    method: 'GET',
    url: `/api/beers/${beerId}`
  })
);

//index
export const fetchBeers = () => (
  $.ajax({
    method: 'GET',
    url: '/api/beers'
  })
);
