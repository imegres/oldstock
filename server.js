const express = require('express');
const next = require('next');

const port = parseInt(process.env.PORT, 10) || 3000;
const start = 'next start';
const app = next({ start });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  /* ----------------------------- FORÇANDO HTTPS ----------------------------- */

  server.use(function (req, res, next) {
    if (req.get('X-Forwarded-Proto') !== 'https') {
      res.redirect('https://' + req.get('Host') + req.url);
    } else next();
  });

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`[APP] - Servidor online! Porta: ${port}`);
  });
});

module.exports = app;
