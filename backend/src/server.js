import 'dotenv/config';
import express from 'express';

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', message: 'Express backend is running.' });
});

app.listen(port, () => {
  console.log(`Backend running at http://localhost:${port}`);
});
