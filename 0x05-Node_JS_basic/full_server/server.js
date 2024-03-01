import express from 'express';
import mapRoutes from './routes';

const app = express();
const PORT = 1245;

// Use the routes defined in full_server/routes/index.js
mapRoutes(app);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
module.exports = app;
