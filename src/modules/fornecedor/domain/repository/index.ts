import Fornecedor from "../entity";

export default interface EntityRepository {
	save (fornecedor: Fornecedor): Promise<void>;
	get (id?: string): Promise<Fornecedor>;
	update (fornecedor: Fornecedor): Promise<void>;
	delete(id?: string): Promise<void>;
	enable(id?: string): Promise<void>;
	list (page: string, limit: string): Promise<Fornecedor[]>;
	listAll (page: string, limit: string): Promise<Fornecedor[]>;
}
