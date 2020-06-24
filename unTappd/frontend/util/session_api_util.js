export const signup = user => {
  debugger
  return $.ajax({
    url: "/api/users",
    method: "POST",
    data: { user }
  })
}

export const login = user => (
  $.ajax({
    url: "/api/session",
    method: "POST",
    data: { user }
  })
);

export const logout = () => {
  // debugger
  return $.ajax({
    url: "/api/session",
    method: "DELETE",
  })
};
