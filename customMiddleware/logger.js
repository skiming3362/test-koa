module.exports = async (ctx, next) => {
    console.log(`Process ${ctx.method} ${ctx.url}...`);
    await next();
};