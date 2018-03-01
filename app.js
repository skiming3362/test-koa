const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const controller = require('./customMiddleware/controller');
const logger = require('./customMiddleware/logger');
const serve = require('koa-static');
const path = require('path');

const root = path.resolve(__dirname, 'static');

const app = new Koa();

app.use(logger);
app.use(serve(root));
app.use(bodyParser());
app.use(controller());

app.listen(3000);
console.log('app started ad port 3000...');

