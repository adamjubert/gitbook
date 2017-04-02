import { token } from './secret'

export const fetchIssues = (username, repo) => {
  const url =`https://api.github.com/repos/${username}/${repo}/issues?state=all&filter=all&access_token=${token}`;
  return $.ajax({
    method: 'GET',
    url
  });
};


export const createIssue = issue => {
  const url = `https://api.github.com/repos/${issue.username}/${issue.repo}/issues?access_token=${token}`;

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

  const url = `https://api.github.com/repos/${username}/${repoName}/issues/${issue.number}?access_token=${token}`;

  return $.ajax({
    url,
    method: 'PATCH',
    data: JSON.stringify({
      state: issue.state,
      title: issue.title,
      body: issue.body
    })
  });
};
