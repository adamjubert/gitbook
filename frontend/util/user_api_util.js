export const fetchUser = () => {
  return $.ajax({
    method: 'GET',
    url: `https://api.github.com/users/adamjubert`,
  });
};
