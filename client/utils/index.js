const getConfig = (accessToken) => {
  const config = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: accessToken,
    },
  };
  return {
    config,
  };
}

export const webApiGet = (accessToken, url) => {
  const config = getConfig(accessToken);
  return {
    request: axios.get(url, config.config),
  };
}

export const webApiPost = (accessToken, url, options) => {
  const config = getConfig(accessToken);
  return {
    request: axios.post(url, options, config.config),
  };
}
