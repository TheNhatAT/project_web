const example = (res) => {
    res.writeHead(200, {
        'Content-Type':'application/json'
    }).end(JSON.stringify('Say hello Nodejs MVC'))
}

module.exports = {
    example
}