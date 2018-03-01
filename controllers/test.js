const fn_test = async (ctx, next) => {
    ctx.body = '123';
};

module.exports = {
    'POST /test': fn_test,
};