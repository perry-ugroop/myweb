const renderPage = (res, viewName, options) => {
  let mergedOpts = { baseUrl: '/myweb' };

  if (options) {
    mergedOpts = { ...options };
  }

  res.set('Content-Type', 'text/html; charset="utf-8"');
  res.render(viewName, mergedOpts);
};

export default { renderPage };
