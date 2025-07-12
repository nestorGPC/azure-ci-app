const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('¡Hola desde Azure Web App!');
});

app.get('/api/status', (req, res) => {
  res.json({ estado: 'ok' });
});

app.listen(port, () => {
  console.log(`Servidor escuchando en puerto ${port}`);
});
