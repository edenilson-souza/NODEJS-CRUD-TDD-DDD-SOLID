/* import Fornecedor from "../../domain/entity";
import FornecedorRepository from "../../infra/repository/DatabaseRepository";
import connection from "../../../../infra/database";

describe.skip('DatabaseRepository', () => {
    test("Deve atualizar fornecedor no banco de dados", async function () {
        const fornecedorRepository = new FornecedorRepository(new connection);
        const getFornecedor = await fornecedorRepository.get("123456");
        const fornecedor = new Fornecedor(getFornecedor);
        fornecedor.update({endereco_rua: "NOVO ENDERECO"});
        fornecedor.update({endereco_numero: "5874"});
        await fornecedorRepository.update(fornecedor);
        const getFornecedorUpdate = await fornecedorRepository.get("123456");
        expect(getFornecedorUpdate.endereco_rua).toBe("NOVO ENDERECO");
        expect(getFornecedorUpdate.endereco_numero).toBe("5874");
        await fornecedorRepository.update(getFornecedor);
    });
}); */