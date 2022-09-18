import axios from "axios";
import * as dotenv from 'dotenv';
dotenv.config();

describe('FornecedorRoutes', () => {
	test("Deve cadastrar um fornecedor", async function () {
		const login = await axios({
			url: "http://localhost:3001/api/v1/auth/login",
			method: "post",
			data: {
				"username": process.env.USERNAME_AUTH_TEST,
				"password": process.env.PASSWORD_AUTH_TEST,
				"system": process.env.SYSTEM_AUTH_TEST
			}
		});

		const token = login.data.data.accessToken;
		const responseGetFornecedor = await axios({
			url: "http://localhost:3000/api/v1/fornecedor",
			data: {
				"cnpj": "12345678912114",
				"nome_fantasia": "NOME FANTASIA DA EMPRESA",
				"razao_social": "RAZAO SOCIAL DA EMPRESA",
				"endereco_cep": "49000000",
				"endereco_rua": "RUA",
				"endereco_numero": "312",
				"endereco_complemento": "CASA",
				"endereco_bairro": "SANTOS",
				"endereco_cidade": "SAO PAULO",
				"endereco_estado": "SAO PAULO",
				"contato_email": "email@email.com",
				"contato_telefone": "79999999999"
			},
			method: "post",
			headers: {
				Authorization: token
			}
		});
		const fornecedor = responseGetFornecedor.data;		
		//expect(fornecedor.endereco_cep).toBe('49087836');

	});
	test("Deve buscar um fornecedor", async function () {
		const login = await axios({
			url: "http://localhost:3001/api/v1/auth/login",
			method: "post",
			data: {
				"username": process.env.USERNAME_AUTH_TEST,
				"password": process.env.PASSWORD_AUTH_TEST,
				"system": process.env.SYSTEM_AUTH_TEST
			}
		});
		const token = login.data.data.accessToken;
		const responseGetFornecedor = await axios({
			url: "http://localhost:3000/api/v1/fornecedor/123456",
			method: "get",
			headers: {
				Authorization: token
			}
		});
		const fornecedor = responseGetFornecedor.data;		
		//expect(fornecedor.endereco_cep).toBe('49087836');

	});

	test("Deve atualizar um fornecedor", async function () {
		const login = await axios({
			url: "http://localhost:3001/api/v1/auth/login",
			method: "post",
			data: {
				"username": process.env.USERNAME_AUTH_TEST,
				"password": process.env.PASSWORD_AUTH_TEST,
				"system": process.env.SYSTEM_AUTH_TEST
			}
		});
		const token = login.data.data.accessToken;
		const responseGetFornecedor = await axios({
			url: "http://localhost:3000/api/v1/fornecedor/123456",
			method: "get",
			headers: {
				Authorization: token
			}
		});
		const fornecedor = responseGetFornecedor.data;		
		//expect(fornecedor.endereco_cep).toBe('49087836');

	});

	test("Deve deletar um fornecedor", async function () {
		const login = await axios({
			url: "http://localhost:3001/api/v1/auth/login",
			method: "post",
			data: {
				"username": process.env.USERNAME_AUTH_TEST,
				"password": process.env.PASSWORD_AUTH_TEST,
				"system": process.env.SYSTEM_AUTH_TEST
			}
		});
		const token = login.data.data.accessToken;
		const responseGetFornecedor = await axios({
			url: "http://localhost:3000/api/v1/fornecedor/123456",
			method: "get",
			headers: {
				Authorization: token
			}
		});
		const fornecedor = responseGetFornecedor.data;		
		//expect(fornecedor.endereco_cep).toBe('49087836');

	});

});