import appUtils from './lib/appUtils';
import routes from './routes';

const app = appUtils.createApp(`${__dirname}/assets`);
routes.setup(app);

const port = 4003;
app.listen(port, () => console.log(`Example app listening on port ${port}`));

