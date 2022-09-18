import * as yup from "yup";

export const create = yup.object({
    cpf: yup.string().min(11).max(11),
    cnpj: yup.string().min(14).max(14),
    nome_fantasia: yup.string().required("Insira o Nome Fantasia"),
    razao_social: yup.string(),
    endereco_cep: yup.string().min(8).max(8),
    endereco_rua:yup.string(),
    endereco_numero: yup.string(),
    endereco_complemento: yup.string(),
    endereco_bairro: yup.string(),
    endereco_cidade: yup.string(),
    endereco_estado: yup.string(),
    contato_email: yup.string().email("Insira um e-mail válido"),
    contato_telefone: yup.string(),
    contato_telefone_2: yup.string(),
});

export const get = yup.object({
    id: yup.string().required("Insira o ID")
});

export const update = yup.object({
    id: yup.string().required("Insira o ID"),
    cpf: yup.string().min(11).max(11),
    cnpj: yup.string().min(14).max(14),
    nome_fantasia: yup.string(),
    razao_social: yup.string(),
    endereco_cep: yup.string().min(8).max(8),
    endereco_rua:yup.string(),
    endereco_numero: yup.string(),
    endereco_complemento: yup.string(),
    endereco_bairro: yup.string(),
    endereco_cidade: yup.string(),
    endereco_estado: yup.string(),
    contato_email: yup.string().email("Insira um e-mail válido"),
    contato_telefone: yup.string(),
    contato_telefone_2: yup.string(),
});

export const deletar = yup.object({
    id: yup.string().required("Insira o ID")
});

export const list = yup.object({
    page: yup.string().required().min(1).max(6),
    limit: yup.string().required().min(1).max(6)
});



