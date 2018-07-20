import config from '../config';

const renderPage = (res, viewName, options) => {
  const publicConfig = {
    baseUrl: config.baseUrl,
    apiUrl: config.apiUrl,
  };

  let mergedOpts = {
    ...publicConfig,
    config: JSON.stringify(publicConfig),
  };

  if (options) {
    mergedOpts = { ...mergedOpts, ...options };
  }

  res.set('Content-Type', 'text/html; charset="utf-8"');
  res.render(viewName, mergedOpts);
};

export default { renderPage };
