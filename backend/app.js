const express = require('express');
const cors = require('cors');
const dataBase = require('./db.json');

const port = 3005;
const app = express();
app.use(cors());

app.get('/', (req, res) => {
  res.json(dataBase);
});
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
