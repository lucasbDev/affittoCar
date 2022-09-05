import express from 'express';
import { response } from 'express';
import { request } from 'http';

import { categoriesRoutes } from './routes/categories.routes';
import { specificationsRoutes } from './routes/specifications.routes';

const app = express();

app.use(express.json());

app.use("/categories",categoriesRoutes)
app.use("/specifications",specificationsRoutes)

app.listen(5353, () => {
    console.log("server's runnin'!")
});