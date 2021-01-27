const API = 'https://api.vetvet.co/api/v1/';

const getBaseOptions = method => {
  const options = {
    headers: {
      method,
      accept: 'application/json',
      'content-Type': 'application/json'
    }
  };

  return options;
};

const base = async (method, path) => {
  const option = getBaseOptions(method);
  const URL = `${API}${path}`;

  return fetch(URL, option)
    .then(response => {
      return response.json();
    })
    .catch(error => {
      console.error(error);
    });
};

const request = {
  get: path => {
    return base('GET', path);
  }
};

export default request;
