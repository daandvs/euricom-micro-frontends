import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import request from 'request';
import ProductsView from './src/products-view';

const app = express();
app.use('/products', express.static('./dist'));

app.use('/products-app/dealer/:dealerId', (req, res) => {
  request(`http://localhost:3005/products?dealerId=${req.params.dealerId}`, (error, response, body) => {
    const products = JSON.parse(body);
    const renderedProductsView = renderToString(React.createElement(ProductsView, { products }));
    res.send(`<div id="root">${renderedProductsView}</div>`);
  });
});

app.listen(3002);
console.log('[PRODUCTS] listening on port 3002');