import Fornecedor from "../domain/entity";

export default interface FornecedorRepository {
	Save (data: FornecedorType): Promise<void>;
	Get (id: String): Promise<Fornecedor>;
	Update (data: FornecedorType): Promise<void>;
    Delete (data: FornecedorType): Promise<void>;
	Enable(data: FornecedorType): Promise<void>;
	List (page: String, limit: String): Promise<Fornecedor[]>;
	ListAll (page: String, limit: String): Promise<Fornecedor[]>;
}


type FornecedorType = {
	id?: string,
	cpf?: string,
	cnpj?: string,
	nome_fantasia?: string,
	razao_social?: string,
	endereco_cep?: string,
	endereco_rua?: string,
	endereco_numero?: string,
	endereco_complemento?: string,
	endereco_bairro?: string,
	endereco_cidade?: string,
	endereco_estado?: string,
	contato_email?: string,
	contato_telefone?: string,
	contato_telefone_2?: string
}
