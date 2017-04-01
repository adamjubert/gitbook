export const fetchRepos = (username) => {
  return $.ajax({
    method: 'GET',
    url: `https://api.github.com/users/adamjubert/repos?sort=updated`,
  });
};
