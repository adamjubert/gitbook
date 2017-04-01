export const fetchIssues = (username, repo) => {
  return $.ajax({
    method: 'GET',
    url: `https://api.github.com/repos/${username}/${repo}/issues?state=all&filter=all&access_token=0867f7b293610ec20774b99085de377197c72f17`,
  });
};


export const createIssue = issue => {
  let url = `https://api.github.com/repos/${issue.username}/${issue.repo}` +
    "/issues?access_token=" +
    "0867f7b293610ec20774b99085de377197c72f17";

  return $.ajax({
    url,
    method: 'POST',
    data: JSON.stringify( issue )
  });
};


export const updateIssue = issue => {
  let repoUrl = issue.repository_url;
  let repoName = repoUrl.substr(repoUrl.lastIndexOf('/') + 1);
  let username = issue.user.login;
  return $.ajax({
    url: `https://api.github.com/repos/${username}/${repoName}/issues/${issue.number}?access_token=0867f7b293610ec20774b99085de377197c72f17`,
    method: 'PATCH',
    data: JSON.stringify({
      state: issue.state,
      title: issue.title,
      body: issue.body
    })
  });
};
