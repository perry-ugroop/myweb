import home from './routes/home';
import signin from './routes/siginin';
import util from './lib/appUtils'

const setup = (app) => {
  util.setRoute(app, '/', home);
  util.setRoute(app, '/signin', signin);
};

export default { setup };
