import Fornecedor from "../domain/entity";
import EntityRepository from "../domain/repository";
import ServiceRepository from './Repository';

export default class FornecedorService implements ServiceRepository {

	constructor (readonly repository: EntityRepository) {
	}

	async Save (data: FornecedorType): Promise<void> {
		try {
			const checkIsExist = await this.repository.get(data.id);
			if(checkIsExist){
				throw new Error("Fornecedor já cadastrado");
			}
		}catch(e){
			if((e as Error).message === "Nenhum fornecedor encontrado"){
				await this.repository.save(new Fornecedor(data));
			}else{
				throw new Error((e as Error).message);
			}
		}
	}

	async Get (id: string): Promise<Fornecedor> {
		const fornecedor = await this.repository.get(id);	
		return fornecedor;
	}

	async Update (data: FornecedorType): Promise<void> {
		try {
			const getFornecedor = await this.repository.get(data.id);
			if(getFornecedor){
				const fornecedor = new Fornecedor(getFornecedor);
				fornecedor.update(data);
				await this.repository.update(fornecedor);
			}
		}
		catch(e){
			throw new Error((e as Error).message);
		}
	}

	async Delete (data: FornecedorType): Promise<void> {
		try {
			const getFornecedor = await this.repository.get(data.id);
			if(getFornecedor){
				await this.repository.delete(data.id);
			}
		}
		catch(e){
			throw new Error((e as Error).message);
		}
	}

	async Enable (data: FornecedorType): Promise<void> {
		try {
			const getFornecedor = await this.repository.get(data.id);
			if(getFornecedor){
				await this.repository.enable(data.id);
			}
		}
		catch(e){
			throw new Error((e as Error).message);
		}
	}

	async List (page: string, limit: string): Promise<Fornecedor[]> {
		const fornecedor = await this.repository.list(page, limit);	
		return fornecedor;
	}

	async ListAll (page: string, limit: string): Promise<Fornecedor[]> {
		const fornecedor = await this.repository.listAll(page, limit);	
		return fornecedor;
	}

}

type FornecedorType = {
	id: string,
	cpf: string,
	cnpj: string,
	nome_fantasia: string,
	razao_social: string,
	endereco_cep: string,
	endereco_rua: string,
	endereco_numero: string,
	endereco_complemento: string,
	endereco_bairro: string,
	endereco_cidade: string,
	endereco_estado: string,
	contato_email: string,
	contato_telefone: string,
	contato_telefone_2: string
}


