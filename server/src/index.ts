import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// Hafızada veri
let ventures: any[] = [];
let documents: any[] = [];

app.post('/api/ventures', (req, res) => {
  const venture = { id: ventures.length + 1, ...req.body };
  ventures.push(venture);
  res.status(201).json(venture);
});

app.get('/api/ventures', (req, res) => {
  res.json(ventures);
});

app.post('/api/documents', (req, res) => {
  const doc = { id: documents.length + 1, ...req.body };
  documents.push(doc);
  res.status(201).json(doc);
});

app.get('/api/documents', (req, res) => {
  res.json(documents);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
