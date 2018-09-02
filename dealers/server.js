import express from 'express';
import request from 'request';
import renderView from './src/render';

const app = express();
app.use('/dealers', express.static('./dist'));

app.use('/dealers-app', (req, res) => {
  request('http://localhost:3005/dealers', (error, response, body) => {
    res.send(renderView(JSON.parse(body)));
  });
});

app.listen(3001);
console.log('[DEALERS] listening on port 3001');