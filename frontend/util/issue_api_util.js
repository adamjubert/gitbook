export const fetchIssues = (username, repo) => {
  return $.ajax({
    method: 'GET',
    url: `https://api.github.com/repos/${username}/${repo}/issues`,
  });
};
