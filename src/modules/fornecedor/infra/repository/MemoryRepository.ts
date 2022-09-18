import Connection from "../../../../infra/database/Connection";
import Fornecedor from "../../domain/entity";
import FornecedorRepository from "../../domain/repository";

export default class FornecedorMemoryRepository implements FornecedorRepository {
	fornecedor: Fornecedor[];

	constructor (readonly connection: Connection) {
		this.fornecedor = [];
	}
	enable(id?: string | undefined): Promise<void> {
		throw new Error("Method not implemented.");
	}

	async save(fornecedor: Fornecedor): Promise<void> {
		this.fornecedor.push(fornecedor);
	}

	update(fornecedor: Fornecedor): Promise<void> {
		throw new Error("Method not implemented.");
	}

	delete(id: string): Promise<void> {
		throw new Error("Method not implemented.");
	}

	list(): Promise<Fornecedor[]> {
		throw new Error("Method not implemented.");
	}

	async get(id: string): Promise<Fornecedor> {
		const fornecedor = this.fornecedor.find(fornecedor => fornecedor.id === id);
		if (!fornecedor) throw new Error();
		return fornecedor;
	}
	async listAll (page: string, limit: string): Promise<Fornecedor[]>{
		const fornecedor = this.fornecedor;
		return fornecedor;
	}
}
