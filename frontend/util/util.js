export const getRepoNameFromUrl = (url) => {
  return url.substr(url.lastIndexOf('/') + 1);
};
