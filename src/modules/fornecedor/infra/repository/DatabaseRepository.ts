import Connection from "../../../../infra/database/Connection";
import Fornecedor from "../../domain/entity";
import EntityRepository from "../../domain/repository";


export default class DatabaseRepository implements EntityRepository {
	
	constructor (readonly connection: Connection) {
	}

	async save(data: Fornecedor): Promise<void> {
		const connection = await this.connection.connect();
		await connection.fornecedor.create({
			data: {
				id: data.id,
				cpf: data.cpf,
				cnpj: data.cnpj,
				nome_fantasia: data.nome_fantasia,
				razao_social: data.razao_social,
				endereco_cep: data.endereco_cep,
				endereco_rua: data.endereco_rua,
				endereco_numero: data.endereco_numero,
				endereco_complemento: data.endereco_complemento,
				endereco_bairro: data.endereco_bairro,
				endereco_cidade: data.endereco_cidade,
				endereco_estado: data.endereco_estado,
				contato_email: data.contato_email,
				contato_telefone: data.contato_telefone,
				contato_telefone_2: data.contato_telefone_2
			}
		});
	}
	async get(id: string): Promise<Fornecedor> {
		if(!id){
			throw new Error("Nenhum id definido");
		}
		const connection = await this.connection.connect();
		const result = await connection.fornecedor.findUnique({
			where: {
				id: id
			}
		});
		if(!result){
			throw new Error("Nenhum fornecedor encontrado");
		}
		const fornecedor = new Fornecedor(result);
		return fornecedor;
	}

	async update(data: Fornecedor): Promise<void> {
		const connection = await this.connection.connect();
		await connection.fornecedor.updateMany({
			where: {
				AND: [
					{id: data.id},
					{active: true}
				]
			},
			data: {
				cpf: data.cpf,
				cnpj: data.cnpj,
				nome_fantasia: data.nome_fantasia,
				razao_social: data.razao_social,
				endereco_cep: data.endereco_cep,
				endereco_rua: data.endereco_rua,
				endereco_numero: data.endereco_numero,
				endereco_complemento: data.endereco_complemento,
				endereco_bairro: data.endereco_bairro,
				endereco_cidade: data.endereco_cidade,
				endereco_estado: data.endereco_estado,
				contato_email: data.contato_email,
				contato_telefone: data.contato_telefone,
				contato_telefone_2: data.contato_telefone_2
			}
		});
	}
	async delete(id: string): Promise<void> {
		if(!id){
			throw new Error("Nenhum id definido");
		}
		const connection = await this.connection.connect();
		await connection.fornecedor.updateMany({
			where: {
				AND: [
					{active: true},
					{id: id}
					
				]
			},		
			data: {
				active: false
			}
		});
	}

	async enable(id: string): Promise<void> {
		if(!id){
			throw new Error("Nenhum id definido");
		}
		const connection = await this.connection.connect();
		await connection.fornecedor.updateMany({
			where: {
				AND: [
					{active: false},
					{id: id}
					
				]
			},		
			data: {
				active: true
			}
		});
	}

	
	async list(page: string, limit: string): Promise<Fornecedor[]> {
		const connection = await this.connection.connect();
		const result = await connection.fornecedor.findMany({
			take: parseInt(limit),
  			skip: ((parseInt(page) - 1) * parseInt(limit)),
			where: {
				active: true
			}
		});
		if(!result){
			throw new Error("Nenhum fornecedor encontrado");
		}
		let fornecedor: Fornecedor[] = [];
		result.forEach(function(fornecedorInd: Fornecedor) {
			const newFor = new Fornecedor(fornecedorInd); 
			fornecedor.push(newFor);
		});
		return fornecedor;
	}

	async listAll(page: string, limit: string): Promise<Fornecedor[]> {
		const connection = await this.connection.connect();
		const result = await connection.fornecedor.findMany({
			take: parseInt(limit),
  			skip: ((parseInt(page) - 1) * parseInt(limit))
		});
		if(!result){
			throw new Error("Nenhum fornecedor encontrado");
		}
		let fornecedor: Fornecedor[] = [];
		result.forEach(function(fornecedorInd: Fornecedor) {
			const newFor = new Fornecedor(fornecedorInd); 
			fornecedor.push(newFor);
		});
		return fornecedor;
	}

}