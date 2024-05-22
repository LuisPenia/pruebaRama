const express = require('express');
const fs = require('fs');
const csv = require('csv-parser');
const app = express();
const port = 3000;

app.get('/api/disfraces', (req, res) => {
  const disfraces = [];
  fs.createReadStream('disfraces.csv')
    .pipe(csv())
    .on('data', (row) => {
      disfraces.push(row);
    })
    .on('end', () => {
      res.json(disfraces);
    })
    .on('error', (error) => {
      res.status(500).json({ error: error.message });
    });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
