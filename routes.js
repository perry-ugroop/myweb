import home from './routes/home';
import signin from './routes/siginin';

const setup = (app) => {
  app.use('/', home);
  app.use('/signin', signin);
};

export default { setup };
