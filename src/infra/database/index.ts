import Connection from "./Connection";
// import pgp from "pg-promise";
import {PrismaClient} from '@prisma/client';

export default class PostgreSQLAdapter implements Connection {
	connection: any;

	constructor () {
		this.connection = new PrismaClient();
	}

	connect(): Promise<any> {
		return this.connection;
	}

	close(): Promise<void> {
		return this.connection.$disconnect();
	}
	
}
