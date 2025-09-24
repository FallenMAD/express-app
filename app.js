import path from 'path';
import express from 'express';

import { rootDir } from './utils/dirnameHelper.js';
 
import adminRoutes from './routes/admin.js';
import shopRoutes from './routes/shop.js';

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(rootDir, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).render('404', { docTitle: 'Not Found Page' });
});

app.listen(3003);