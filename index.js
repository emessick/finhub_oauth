const express = require('express');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 3000;

// ➕ Root route for Azure
app.get('/', (req, res) => {
  res.send('✅ Hello from Finhub OAuth deployed on Azure!');
});

app.get('/oauth/callback', (req, res) => {
  const { code, realmId, state } = req.query;

  console.log('✅ OAuth callback received:', { code, realmId, state });

  res.json({
    message: "OAuth callback successful",
    code,
    realmId,
    state
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});