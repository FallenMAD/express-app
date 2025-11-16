import path from 'path';
import express from 'express';

import { rootDir } from './utils/dirnameHelper.js';

import adminRoutes from './routes/admin.js';
import shopRoutes from './routes/shop.js';
import { errorController } from './controllers/error.js';
import { sequelize } from './utils/database.js';

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(rootDir, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.handle404);

sequelize
  .sync()
  .then((result) => {
    app.listen(3003);
  })
  .catch((error) => {
    console.log(error);
  });
