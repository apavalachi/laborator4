// const http = require('http');
//
// const port = 3000;
//
// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Exemplu de server folosind node js');
// });

// server.listen(port, () => {
//     console.log(`Aplicatia rulează la http://:${port}/`);
// });


const http = require('http');

const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Salut! Acesta este un server Node.js simplu.');
});

server.listen(port, '127.0.0.1', () => {
    console.log(`Serverul rulează la http://127.0.0.1:${port}/`);
});
