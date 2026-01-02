const logger = console;

const app = require('../src/app');

const port = process.env.PORT || 3000;

app.listen(port, () => logger.info(`API listening on port => ${port}`));
