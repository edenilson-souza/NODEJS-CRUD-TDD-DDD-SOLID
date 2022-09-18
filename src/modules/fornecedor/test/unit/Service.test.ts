/* 
import FornecedorService from "../../service"
import PostgreSQLAdapter from "../../../../infra/database";
import Fornecedor from "../../domain/entity";

// import FornecedorMemoryRepository from "../../infra/repositoryMemoryRepository";
import FornecedorDatabaseRepository from "../../infra/repository/DatabaseRepository";

describe.skip('FornecedorService', () => {

	test("Deve verificar se fornecedor já esta cadastrado, senao deve cadastrar", async function () {
		const connection = new PostgreSQLAdapter();
		const fornecedorRepository = new FornecedorDatabaseRepository(connection);

		//const fornecedorRepository = new FornecedorMemoryRepository(connection);
		const fornecedorService = new FornecedorService(fornecedorRepository)

		const dataToSave = {
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
		
		try{
			const getExist = await fornecedorService.GetFornecedor(dataToSave.id);
			if(getExist){
				const fornecedor = new Fornecedor(dataToSave);
				expect(getExist).toEqual(fornecedor);
			}
		}catch(error){
			await fornecedorService.SaveFornecedor(dataToSave);
			const resultGet = await fornecedorService.GetFornecedor("123456");
			const fornecedorTest = new Fornecedor(dataToSave);
			expect(resultGet).toEqual(fornecedorTest);
		}
	});

}); */