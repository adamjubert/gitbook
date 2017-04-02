import { token } from './secret';

export const fetchUser = (username) => {
  return $.ajax({
    method: 'GET',
    url: `https://api.github.com/users/${username}?access_token=${token}`,
  });
};
