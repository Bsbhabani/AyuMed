import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Determine the correct dist path
const distPath = join(__dirname, 'dist');
console.log('Looking for dist at:', distPath);
console.log('Dist exists:', fs.existsSync(distPath));

// Serve static files from the dist directory
app.use(express.static(distPath));

// Handle client-side routing - send index.html for all routes
app.get('*', (req, res) => {
  const indexPath = join(distPath, 'index.html');
  console.log('Serving:', indexPath);
  res.sendFile(indexPath);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
