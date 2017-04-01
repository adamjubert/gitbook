export const fetchUser = () => {
  return $.ajax({
    method: 'GET',
    url: `https://api.github.com/users/adamjubert?access_token=0867f7b293610ec20774b99085de377197c72f17`,
  });
};
