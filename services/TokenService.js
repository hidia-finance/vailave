const TokenService = {
  getToken: location => {
    return fetch('https://perovaz.com/api/token', {
      method: 'GET',
      params: {
        location,
      },
    }).then(response => response.json());
  },
};

export default TokenService;
