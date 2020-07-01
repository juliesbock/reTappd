export const fetchBeer = beerId => (
  $.ajax({
    method: 'GET',
    url: `/api/beers/${beerId}`
  })
);

export const fetchBeers = () => (
  $.ajax({
    method: 'GET',
    url: '/api/beers'
  })
);
