import Http from "./Http";
import express, { Request, Response } from "express";
import AuthToken from "../../util/middleware/authenticateToken";
import bodyParser from 'body-parser';

export default class ExpressAdapter implements Http {
	app: any;

	constructor () {
		this.app = express();
		this.app.use(express.json());
		this.app.use( function (req: any, res: any, next: any) {
			res.header("Access-Control-Allow-Origin", "*");
			res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
			res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
			next();
		});

		this.app.use(bodyParser.urlencoded({ limit: '50mb', extended: false }));
		this.app.use(bodyParser.json({ limit: 10 * 1024 * 1024 }));
		this.app.use(bodyParser.raw({ limit: 10 * 1024 * 1024 }));
	

		this.app.use( function (req: any, res: any, next: any) {
			return next();
			/*if (req.url === "/login") return next();
			const authorization = req.headers["authorization"];
	
			if (authorization) {
				const token = authorization.replace("Bearer ", "");
				if (token === "123456") {
					return next();
				}
			}
			return res.status(401).end();*/
		});
	}

	route(method: string, url: string, role: string[], callback: Function): void {

			
			this.app[method]("/api/v1" + url, async function (req: Request, res: Response) {

				if(role[0] === "public"){
					const output = await callback(req.params, req.body, req);
					res.status(output.status).json(output.response);
				}
				else{
					const authToken = new AuthToken(role);
					await authToken.Validate(req, res, async function () {
						const output = await callback(req.params, req.body, req);
						res.status(output.status).json(output.response);
					});
				}
			});
		/* }else{
			this.app[method]("/api/v1" + url, async function (req: Request, res: Response) {
				res.status(403).json({Error: "Acesso Negado."});
			});
		} */
		
	}

	listen(port: number): void {
		this.app.listen(port);
	}

}