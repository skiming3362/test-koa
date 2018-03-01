const Koa = require('koa');

const app = new Koa();

app.use(async (ctx, next) => {
    console.log(`${ctx.method} ${ctx.request.url}`); // 打印URL
    await next(); // 调用下一个middleware
});

app.use(async (ctx, next) => {
    const start = new Date().getTime(); // 当前时间
    await next(); // 调用下一个middleware
    const ms = new Date().getTime() - start; // 耗费时间
    console.log(`Time: ${ms}ms`); // 打印耗费时间
});

app.use(async (ctx, next) => {
    await next();
    ctx.type = 'text/html';
    ctx.body = '<h1>Hello World!</h1>';
    console.log(`TYPE: ${ctx.type}`);
});

app.listen(3000);
console.log('app started ad port 3000...');

