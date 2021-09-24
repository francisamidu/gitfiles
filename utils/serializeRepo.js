const serializeRepo = (repo) => {
  return {
    id: repo.id,
    name: repo.name,
    url: repo.html_url,
  };
};

export default serializeRepo;
