export default class Fornecedor {
	id: string;
	cpf: string;
	cnpj: string;
	nome_fantasia: string;
	razao_social: string;
	endereco_cep: string;
	endereco_rua: string;
	endereco_numero: string;
	endereco_complemento: string;
	endereco_bairro: string;
	endereco_cidade: string;
	endereco_estado: string;
	contato_email: string;
	contato_telefone: string;
	contato_telefone_2: string;
	
	constructor ( data: Data) {
		this.id = data.id;
		this.cpf = data.cpf;
		this.cnpj = data.cnpj;
		this.nome_fantasia = data.nome_fantasia; 
		this.razao_social = data.razao_social;
		this.endereco_cep = data.endereco_cep;
		this.endereco_rua = data.endereco_rua;
		this.endereco_numero = data.endereco_numero;
		this.endereco_complemento = data.endereco_complemento;
		this.endereco_bairro = data.endereco_bairro;
		this.endereco_cidade = data.endereco_cidade;
		this.endereco_estado = data.endereco_estado;
		this.contato_email = data.contato_email;
		this.contato_telefone = data.contato_telefone;
		this.contato_telefone_2 = data.contato_telefone_2;
	}

	async update(data: UpdateData): Promise<void>{
		this.cpf = data.cpf ?? this.cpf;
		this.cnpj = data.cnpj ?? this.cnpj;
		this.nome_fantasia = data.nome_fantasia ?? this.nome_fantasia; 
		this.razao_social = data.razao_social ?? this.razao_social;
		this.endereco_cep = data.endereco_cep ?? this.endereco_cep;
		this.endereco_rua = data.endereco_rua ?? this.endereco_rua;
		this.endereco_numero = data.endereco_numero ?? this.endereco_numero;
		this.endereco_complemento = data.endereco_complemento ?? this.endereco_complemento;
		this.endereco_bairro = data.endereco_bairro ?? this.endereco_bairro;
		this.endereco_cidade = data.endereco_cidade ?? this.endereco_cidade ;
		this.endereco_estado = data.endereco_estado ?? this.endereco_estado; 
		this.contato_email = data.contato_email ?? this.contato_email;
		this.contato_telefone = data.contato_telefone ?? this.contato_telefone;
		this.contato_telefone_2 = data.contato_telefone_2 ?? this.contato_telefone_2;
	}
}

type Data = {
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

type UpdateData = {
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