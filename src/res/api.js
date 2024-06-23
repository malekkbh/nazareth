// fetch('url', params);

const baseURL = 'https://nazareth-server.onrender.com'; // dev
// const baseURL = 'https://nazareth-server.onrender.com/prod'; // prod

export const getAllUsers = async () => {
  const route = '/getAllUsers';

  return await fetchAPI(route);
};

const fetchAPI = async (route, method, body) => {
  const url = baseURL + route;

  const params = {
    'Content-Type': 'application/json',
  };

  if (body) {
    const bodyStr = JSON.stringify(body);
    params.body = bodyStr;
  }

  params.method = method || 'GET';

  return await fetch(url, params)
    .then(res => res?.json())
    .catch(e => console.log('fetch eroor: ', e));
};
