const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// Example API
app.get('/hello', (req, res) => {
  res.send('Hello from backend!');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
