import express from 'express';
import { response } from 'express';
import { request } from 'http';
import swaggerUi from "swagger-ui-express";

import { router } from "./routes";
import swaggerFile from "./swagger.json"

/* resolveJsonModelu: true */


const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile))
//acesso a documentação: http://localhost:5353/api-docs/

app.use(router);

app.listen(5353, () => {
    console.log("server's runnin'!")
});