import config from './config';
import apiRouter from './api';
import express from 'express';

// import fs from 'fs'; (no need since since 
//     express has static middleware 'use')

const server = express();

server.set('view engine', 'ejs'); //magic syntax to use EJS engine in view engine

server.get('/', (req, res) => { 
    res.render('index.ejs',{
        content:'hello react!'
    });
});

server.use('/api', apiRouter);
server.use(express.static('public'));


// server.get('/about.html', (req, res) => {
//     fs.readFile('./about.html', (err, data) => {
//         res.send(data.toString());
//     })
// });

server.listen(config.port, () => {
    console.info('Default Port is :', config.port);
});

// import config, { nodeEnv, logstars }  from './config';
// console.log(config, nodeEnv);
// logstars('this is just a bunch of starts');

//http or https is a part of core module nodejs
// import https from 'https';

// https.get('https://www.google.com', res => {
//     console.log('response from google :', res.statusCode);
    
//     res.on('data', chunk =>{
//         console.log(chunk.toString());
//     });
// });
