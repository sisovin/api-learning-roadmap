import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { config } from './config';
import { connectDB } from './models';
import userRoutes from './routes/userRoutes';
import postRoutes from './routes/postRoutes';

const app = express();

// Middleware
app.use(helmet());
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('combined'));

// Routes
app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);

// Database connection
connectDB().then(() => {
  app.listen(config.port, () => {
    console.log(`Server is running on port ${config.port}`);
  });
}).catch(err => {
  console.error('Failed to connect to the database', err);
});

export default app;
