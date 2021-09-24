class Api {
  static async getUserProfile(user) {
    const API_URL = `api.github.com/users/${user}`;
    try {
      const request = await fetch(API_URL);
      const response = await request.json();
      return response;
    } catch (error) {
      return error;
    }
  }
  static async getUserRepos(user) {
    const API_URL = `api.github.com/users/${user}/repos`;
    try {
      const request = await fetch(API_URL);
      const response = await request.json();
      return response;
    } catch (error) {
      return error;
    }
  }
}

export default Api;
