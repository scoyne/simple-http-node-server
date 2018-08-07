var fs = require('fs');
fs.writeFile('hello-world.txt', 'hello.js', 'utf8', (err) => {
    if (err) throw err;
    console.log('success')
});
}).listen(3000);
