import { token } from './secret';

export const fetchRepos = (username) => {
  const url =
    `https://api.github.com/users/${username}` +
    `/repos?sort=updated?access_token=${token}`;

  return $.ajax({
    method: 'GET',
    url
  });
};
