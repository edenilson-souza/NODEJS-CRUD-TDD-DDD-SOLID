import Connection from "../../../../infra/database";
import Http from "../../../../infra/http/Http";
import Controller from "../../infra/controller";
import FornecedorRepositoryDatabase from "../../infra/repository/DatabaseRepository";
import FornecedorService from "../../service";

describe('FornecedorController', () => {
    test("Deve cadastrar um fornecedor", async function () {
        const params = {};
        const body = {
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
            "contato_telefone": "79999999999",
			"contato_telefone_2": "79999999999"
        }

        const connection = new Connection();
        const databaseRepository = new FornecedorRepositoryDatabase(connection);
		const fornecedorService = new FornecedorService(databaseRepository);
        const controller = new Controller(fornecedorService);

        const saveFornecedor = await controller.create(params, body);
        expect(saveFornecedor.status).toBe(200);
        expect(saveFornecedor.response).toBe({message: "Cadastrado com sucesso"});
    });

    test("Fornecedor já deve estar cadastrado", async function () {
        const params = {};
        const body = {
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
            "contato_telefone": "79999999999",
			"contato_telefone_2": "79999999999"
        }

        const connection = new Connection();
        const databaseRepository = new FornecedorRepositoryDatabase(connection);
		const fornecedorService = new FornecedorService(databaseRepository);
        const controller = new Controller(fornecedorService);

        const saveFornecedor = await controller.create(params, body);
        expect(saveFornecedor.response).toBe({message: "Fornecedor já cadastrado"});
    });
    /* test("Deve atualizar um fornecedor", async function () {
        const body = {}

        const connection = new Connection();
        const databaseRepository = new FornecedorRepositoryDatabase(connection);
		const fornecedorService = new FornecedorService(databaseRepository);
        const controller = new Controller(fornecedorService);

        const getFornecedor = await controller.get(params, body);
        expect(getFornecedor.status).toBe(200);
    }); */
});