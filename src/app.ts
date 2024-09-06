import express from 'express';
import bodyParser from 'body-parser';
// import { authMiddleware } from './middlewares/authMiddleware';
import userRoutes from'./routes/userRoutes'

const app = express();

app.use(bodyParser.json());
// app.use(authMiddleware);
app.use('/api', userRoutes);


// Health check endpoint
app.get('/', (_req, res) => {
  res.status(200).json({ status: 'OK', message: 'Application is running!' });
});

// Health check endpoint
app.get('/health', (_req, res) => {
    res.status(200).json({ status: 'OK', message: 'Service is up and running!' });
});

export default app;
