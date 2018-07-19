import home from './routes/home';

const setup = (app) => {
  app.use('/', home);
};

export default { setup };
