const fn_hello = async (ctx, next) => {
    let name = ctx.params.name;
    ctx.response.body = JSON.stringify({
        name
    });
    ctx.type = 'application/json';
};

module.exports = {
    'GET /hello/:name': fn_hello
};