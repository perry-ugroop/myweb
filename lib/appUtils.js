import express from 'express';
import bodyParser from 'body-parser';

const createApp = (staticDir) => {
  const app = express();

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(express.static(staticDir));

  return app;
};

export default { createApp };

