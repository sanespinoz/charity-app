const app = require('./app'); // Importa la instancia de app desde app.js
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
