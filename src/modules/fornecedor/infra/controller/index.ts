import ControllerRepository from "./Repository";
import ServiceRepository from "../../service/Repository";
import * as valitade from "./Validator";
import Util from "../../../../util";

export default class Controller implements ControllerRepository {
	constructor (readonly serviceRepository: ServiceRepository ) {}

	async create (params: any, body: any): Promise<ResponseType> {
		try{
			const validate = await valitade.create.validate(body)
				.then(function (valid: any) {
					return [valid];
				}).catch(function (err: { name: any; errors: any; }) {
					return [false, { name: err.name, errors: err.errors}];
				});
			if(!validate[0]){
				const response = {message: "Verifique o formulário", error: validate[1]}
				return {status: 400, response};
			}
			const dataToSave = {
				cpf: Util.apenasNumeros(body.cpf ?? ""),
				cnpj: Util.apenasNumeros(body.cnpj ?? ""),
				nome_fantasia: Util.apenasLetras(body.nome_fantasia ?? undefined),
				razao_social: Util.apenasLetras(body.razao_social ?? ""),
				endereco_cep: Util.apenasNumeros(body.endereco_cep ?? ""),
				endereco_rua:  Util.apenasLetras(body.endereco_rua ?? ""),
				endereco_numero: Util.apenasNumeros(body.endereco_numero ?? ""),
				endereco_complemento: Util.apenasLetras(body.endereco_complemento ?? ""),
				endereco_bairro: Util.apenasLetras(body.endereco_bairro ?? ""),
				endereco_cidade:  Util.apenasLetras(body.endereco_cidade ?? ""),
				endereco_estado: Util.apenasLetras(body.endereco_estado ?? ""),
				contato_email: `${body.contato_email ?? ""}`,
				contato_telefone: Util.apenasNumeros(body.contato_telefone ?? ""),
				contato_telefone_2: Util.apenasNumeros(body.contato_telefone_2 ?? ""),
			}
			try{
				await this.serviceRepository.Save({...dataToSave, id: Util.createUUIDv4()});
				const response = {message: "Cadastrado com sucesso"};
				return {status: 200, response};
			}catch(e){
				throw {status: 400, message: (e as Error).message};
			}
		}catch(error: any){
			console.log(error);
			const response = {message: error.message ?? (error as Error).message};
			return {status: error.status ?? 500, response}; 
		}
	}

	async get (params: any, body: any): Promise<ResponseType> {
		try{
			const validate = await valitade.get.validate(params)
				.then(function (valid: any) {
					return [valid];
				}).catch(function (err: { name: any; errors: any; }) {
					return [false, { name: err.name, errors: err.errors}];
				});
			if(!validate[0]){
				const response = {message: "Verifique o formulário", error: validate[1]}
				return {status: 400, response};
			}
			const dataToGet = {
				id: params.id
			}
			try{
				const fornecedor = await this.serviceRepository.Get(dataToGet.id);
				return {status: 200, response: fornecedor};
			}catch(e){
				throw {status: 400, message: (e as Error).message};
			}
		}catch(error: any){
			console.log(error);			
			const response = {message: error.message ?? (error as Error).message};
			return {status: error.status ?? 500, response};
		}
	}

	async update (params: any, body: any): Promise<ResponseType> {
		try{
			const validate = await valitade.update.validate(body)
				.then(function (valid: any) {
					return [valid];
				}).catch(function (err: { name: any; errors: any; }) {
					return [false, { name: err.name, errors: err.errors}];
				});
			if(!validate[0]){
				const response = {message: "Verifique o formulário", error: validate[1]}
				return {status: 400, response};
			}
			const dataToUpdate = {
				id: body.id,
				cnes: body.cnes ? Util.apenasNumeros(body.cnes) : undefined,
				cpf: body.cpf ? Util.apenasNumeros(body.cpf ?? "") : undefined,
				cnpj: body.cnpj ? Util.apenasNumeros(body.cnpj ?? "") : undefined,
				nome_fantasia: body.nome_fantasia ? Util.apenasLetras(body.nome_fantasia ?? "") : undefined,
				razao_social: body.razao_social ? Util.apenasLetras(body.razao_social ?? "") : undefined,
				endereco_cep: body.endereco_cep ? Util.apenasNumeros(body.endereco_cep ?? "") : undefined,
				endereco_rua: body.endereco_rua ? Util.apenasLetras(body.endereco_rua ?? "") : undefined,
				endereco_numero: body.endereco_numero ? Util.apenasNumeros(body.endereco_numero ?? "") : undefined,
				endereco_complemento: body.endereco_complemento ? Util.apenasLetras(body.endereco_complemento ?? "") : undefined,
				endereco_bairro: body.endereco_bairro ? Util.apenasLetras(body.endereco_bairro ?? "") : undefined,
				endereco_cidade: body.endereco_cidade ? Util.apenasLetras(body.endereco_cidade ?? "") : undefined,
				endereco_estado: body.endereco_estado ? Util.apenasLetras(body.endereco_estado ?? "") : undefined,
				contato_email: body.contato_email ? `${body.contato_email ?? ""}` : undefined,
				contato_telefone: body.contato_telefone ? Util.apenasNumeros(body.contato_telefone ?? "") : undefined,
				contato_telefone_2: body.contato_telefone_2 ? Util.apenasNumeros(body.contato_telefone_2 ?? "") : undefined
			}
			if(dataToUpdate.id == "" || !dataToUpdate.id){
				const response = {message: "Preencha o ID corretamente."};
				return {status: 400, response};
			}
			try{
				await this.serviceRepository.Update(dataToUpdate);
				const response = {message: "Fornecedor atualizado com sucesso"};
				return {status: 200, response};
			}catch(e){
				throw {status: 400, message: (e as Error).message};
			}
		}catch(error: any){
			console.log(error);
			const response = {message: error.message ?? (error as Error).message};
			return {status: error.status ?? 500, response}; 
		}
	}

	async delete (params: any, body: any): Promise<ResponseType> {
		try{
			const validate = await valitade.deletar.validate(body)
				.then(function (valid: any) {
					return [valid];
				}).catch(function (err: { name: any; errors: any; }) {
					return [false, { name: err.name, errors: err.errors}];
				});
			if(!validate[0]){
				const response = {message: "Verifique o formulário", error: validate[1]}
				return {status: 400, response};
			}
			const dataToDelete = {
				id: body.id
			}
			if(dataToDelete.id == "" || !dataToDelete.id){
				const response = {message: "Preencha o ID corretamente."};
				return {status: 400, response};
			}
			try{
				await this.serviceRepository.Delete(dataToDelete);
				const response = {message: "Fornecedor desativado com sucesso"};
				return {status: 200, response};
			}catch(e){
				throw {status: 400, message: (e as Error).message};
			}
		}catch(error: any){
			console.log(error);
			const response = {message: error.message ?? (error as Error).message};
			return {status: error.status ?? 500, response}; 
		}
	}

	async enable (params: any, body: any): Promise<ResponseType> {
		try{
			const validate = await valitade.deletar.validate(body)
				.then(function (valid: any) {
					return [valid];
				}).catch(function (err: { name: any; errors: any; }) {
					return [false, { name: err.name, errors: err.errors}];
				});
			if(!validate[0]){
				const response = {message: "Verifique o formulário", error: validate[1]}
				return {status: 400, response};
			}
			const dataToDelete = {
				id: body.id
			}
			if(dataToDelete.id == "" || !dataToDelete.id){
				const response = {message: "Preencha o ID corretamente."};
				return {status: 400, response};
			}
			try{
				await this.serviceRepository.Enable(dataToDelete);
				const response = {message: "Fornecedor ativo com sucesso"};
				return {status: 200, response};
			}catch(e){
				throw {status: 400, message: (e as Error).message};
			}
		}catch(error: any){
			console.log(error);
			const response = {message: error.message ?? (error as Error).message};
			return {status: error.status ?? 500, response}; 
		}
	}

	async list (params: any, body: any): Promise<ResponseType> {
		try{
			const validate = await valitade.list.validate(params)
				.then(function (valid: any) {
					return [valid];
				}).catch(function (err: { name: any; errors: any; }) {
					return [false, { name: err.name, errors: err.errors}];
				});
			if(!validate[0]){
				const response = {message: "Verifique o formulário", error: validate[1]}
				return {status: 400, response};
			}
			try{
				const fornecedor = await this.serviceRepository.List(params.page, params.limit);
				return {status: 200, response: fornecedor};
			}catch(e){
				throw {status: 400, message: (e as Error).message};
			}
		}catch(error: any){
			console.log(error);			
			const response = {message: error.message ?? (error as Error).message};
			return {status: error.status ?? 500, response};
		}
	}

	async listAll (params: any, body: any): Promise<ResponseType> {
		try{
			const validate = await valitade.list.validate(params)
				.then(function (valid: any) {
					return [valid];
				}).catch(function (err: { name: any; errors: any; }) {
					return [false, { name: err.name, errors: err.errors}];
				});
			if(!validate[0]){
				const response = {message: "Verifique o formulário", error: validate[1]}
				return {status: 400, response};
			}
			try{
				const fornecedor = await this.serviceRepository.ListAll(params.page, params. limit);
				return {status: 200, response: fornecedor};
			}catch(e){
				throw {status: 400, message: (e as Error).message};
			}
		}catch(error: any){
			console.log(error);			
			const response = {message: error.message ?? (error as Error).message};
			return {status: error.status ?? 500, response};
		}
	}
}

type ResponseType = {
	status: Number,
	response: Object
}