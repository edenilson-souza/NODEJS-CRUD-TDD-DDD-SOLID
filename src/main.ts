/* import express, { Request, Response } from "express"; */
import ExpressAdapter from "./infra/http/ExpressAdapter";

import Database from "./infra/database";

const connection = new Database();
const http = new ExpressAdapter();

import FornecedorRouter from "./modules/fornecedor/infra/routes";

//ROTAS
new FornecedorRouter(http, connection);

console.log("Server running in port 3000");

http.listen(3000);

process.on("exit", async function () {
	await connection.close();
	process.exit(1);
});