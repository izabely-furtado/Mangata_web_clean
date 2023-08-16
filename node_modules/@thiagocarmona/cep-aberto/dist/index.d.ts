import { CepResult, TextualOptions, State, CitiesResult } from './types/types';
export default class CepAberto {
    private token;
    private api;
    constructor(token: string);
    getCepByNumber(cep: string): Promise<CepResult | {}>;
    getCepCoordinates(lat: string, lng: string): Promise<CepResult | {}>;
    searchCep(options: TextualOptions): Promise<CepResult | {
        message: string;
    }>;
    getCitiesByState(state: State): Promise<CitiesResult[]>;
    updateCepbyNumber(ceps: string[]): Promise<string[]>;
    updateToken(token: string): void;
}
