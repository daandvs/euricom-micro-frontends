import express from 'express';

const app = express();
app.use('/basket', express.static('./dist/basket'));

app.use('/basket-app', (req, res) => {
  res.send('');
});

app.listen(3003);
console.log('[BASKET] listening on port 3003');
