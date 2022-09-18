import Connection from "../../../../infra/database/Connection";
import Http from "../../../../infra/http/Http";

import Controller from "../controller";
import RepositoryDatabase from "../../infra/repository/DatabaseRepository";
import Service from "../../service";

export default class Routes {
	constructor (readonly http: Http, readonly connection: Connection ) {

		const databaseRepository = new RepositoryDatabase(connection);
		const service = new Service(databaseRepository);
		const controller = new Controller(service);

		http.route("post", "/fornecedor", ["admin", "contratos"], (params: Object, body: Object) => controller.create(params, body));
		http.route("get", "/fornecedor/:id", ["admin", "contratos"], (params: Object, body: Object) => controller.get(params, body));
		http.route("post", "/fornecedor/update", ["admin", "contratos"], (params: Object, body: Object) => controller.update(params, body));
		http.route("post", "/fornecedor/delete", ["admin", "contratos"], (params: Object, body: Object) => controller.delete(params, body));
		http.route("post", "/fornecedor/enable", ["admin", "contratos"], (params: Object, body: Object) => controller.enable(params, body));
		http.route("get", "/fornecedor/list/:page/:limit", ["admin", "contratos"], (params: Object, body: Object) => controller.list(params, body));
		http.route("get", "/fornecedor/listAll/:page/:limit", ["admin", "contratos"], (params: Object, body: Object) => controller.listAll(params, body));

	}
}