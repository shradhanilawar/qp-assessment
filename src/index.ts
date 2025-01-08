import express from 'express';
import bodyParser from 'body-parser';
import adminRoutes from './routes/admin-routes';
import userRoutes from './routes/user-routes';
import sequelize from './config/db.config';

const app = express();

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Routes
app.use('/admin', adminRoutes);
app.use('/user', userRoutes);

// Test DB Connection
sequelize.sync().then(() => {
  console.log('Database connected');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
