import express from 'express';
import adminRoutes from './routes/admin.routes';
import userRoutes from './routes/user.routes';
import sequelize from './config/db.config';

const app = express();

app.use(express.json());

const PORT = process.env.PORT;

app.use('/api/admin', adminRoutes);
app.use('/api/user', userRoutes);

// Sync DB and start server
sequelize.sync().then(() => console.log('Database connected'));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
