async function hello() {
    const { default: _ } = await import(/* webpackChunkName: "loadsh" */ 'loadsh');
    let str = _.join(['Hello', ','], ' ');
    return str;
}

hello().then(res => {
    console.log(res);
});

function world() {
    import(/* webpackChunkName: "loadsh" */ 'loadsh')
        .then(module => {
            return module.default.join(['world', '!'], ' ');
        })
        .then(res => {
            console.log(res);
        });
}

world();
