import express from 'express';
import path from 'path';
import render from './src/render';

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/shell', express.static('./build'));

app.get(['/', '/dealer/:dealerId'], (req, res) => {
  const html = render(req.params.dealerId);
  res.render('layout', { html });
});

app.listen(3004);
console.log('[SHELL] running on port 3004');