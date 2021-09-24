const serializeUser = (user) => {
  return {
    id: user.id,
    bio: user.bio,
    avatarUrl: user.avatar_url,
    name: user.name,
    company: user.company,
    followers: user.followers,
    followers: user.following,
    publicRepos: user.public_repos,
    repos: [],
    url: user.html_url,
  };
};
export default serializeUser;
