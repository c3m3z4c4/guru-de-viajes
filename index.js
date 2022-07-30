require('dotenv').config();

const express = require("express");
const router = require('./src/routes/index');
const app = express();

//Configuraciones
app.set("port", process.env.PORT || 3000);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(router);

//Iniciando el servidor
app.listen(app.get("port"), () => {
  console.log(`Server listening on port ${app.get("port")}`);
});