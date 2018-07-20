import express from 'express';
import bodyParser from 'body-parser';
import exphbs from 'express-handlebars';
import config from '../config';

const createApp = (staticDir) => {
  const app = express();

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use('/myweb', express.static(staticDir));

  app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
  app.set('view engine', 'handlebars');

  return app;
};

const setRoute = (app, path, routeObj) => {
  app.use(`${config.baseUrl}${path}`, routeObj);
};

export default { createApp, setRoute };

