import express from 'express';

const app = express();
app.use('/products', express.static('./dist'));

app.listen(3002);
console.log('[PRODUCTS] listening on port 3002');