export const deleteCheckin = (id) => (
  $.ajax({
    method: 'delete',
    url: `api/breweries/${id}`
  })
);