export const fetchIssues = (username, repo) => {
  return $.ajax({
    method: 'GET',
    url: `https://api.github.com/repos/${username}/${repo}/issues?state=all&filter=all&access_token=0867f7b293610ec20774b99085de377197c72f17`,
  });
};
