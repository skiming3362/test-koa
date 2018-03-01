const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const controller = require('./controller');

const app = new Koa();

app.use(async (ctx, next) => {
    console.log(`Process ${ctx.method} ${ctx.url}...`); // 打印URL
    await next(); // 调用下一个middleware
});
app.use(bodyParser());
app.use(controller());

app.listen(3000);
console.log('app started ad port 3000...');

