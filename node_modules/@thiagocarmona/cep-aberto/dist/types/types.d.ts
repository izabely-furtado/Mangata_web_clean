export interface CepResult {
    cidade: Cidade;
    estado: Estado;
    altitude: number;
    longitude: string;
    bairro: string;
    complemento: string;
    cep: string;
    logradouro: string;
    latitude: string;
}
export interface Cidade {
    ibge: string;
    nome: string;
    ddd: number;
}
export interface Estado {
    sigla: string;
}
export interface TextualOptions {
    state: State;
    city: string;
    neighborhood?: string;
    logradouro?: string;
}
export interface CitiesResult {
    nome: string;
}
export type State = "AM" | "RO" | "AC" | "RR" | "PA" | "AP" | "TO" | "MA" | "PI" | "CE" | "RN" | "PB" | "PE" | "AL" | "SE" | "BA" | "MG" | "ES" | "RJ" | "SP" | "PR" | "SC" | "RS" | "MS" | "MT" | "GO" | "DF";
