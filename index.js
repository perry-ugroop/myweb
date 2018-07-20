import appUtils from './lib/appUtils';
import routes from './routes';
import config from './config';

const app = appUtils.createApp(`${__dirname}/assets`);
routes.setup(app);

const port = config.port;
app.listen(port, () => console.log(`Example app listening on port ${port}`));

