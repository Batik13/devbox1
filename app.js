const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Используйте переменную окружения для порта

app.get('/', (req, res) => {
  res.send('Hello DevBox!');
});

app.listen(port, () => {
  console.log(`Node.js app listening on port ${port}`);
});
