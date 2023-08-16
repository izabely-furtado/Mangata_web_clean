import CepAberto from "../src/index"
import { TextualOptions, State } from '../src/types/types';
import { config } from 'dotenv';
config();

describe('CepAberto', () => {
  const token = process.env.API_KEY!;
  const cepAberto = new CepAberto(token);

  describe('getCepByNumber', () => {
    it('should return the CEP information', async () => {
      const cep = '01001000';
      const result = await cepAberto.getCepByNumber(cep);
      expect(result).toHaveProperty('cep', cep);
    });

    it('should return an empty object if the CEP is not found', async () => {
      const cep = '00000000';
      const result = await cepAberto.getCepByNumber(cep);
      expect(result).toEqual({});
    });

  });

  //await new Promise(resolve => setTimeout(resolve, 2000));

  describe('getCepCoordinates', () => {
    it('should return the CEP information', async () => {
      const lat = '-23.5489';
      const lng = '-46.6388';
      const result = await cepAberto.getCepCoordinates(lat, lng);
      //check if has key in object
      expect(result).toHaveProperty('cep');
    });

    it('should return CEP from nearest coordinate to 0,0', async () => {
      const lat = '0';
      const lng = '0';
      const result = await cepAberto.getCepCoordinates(lat, lng);
      expect(result).toHaveProperty('latitude', "0.0");
      expect(result).toHaveProperty('longitude', "0.0");
    });

  });

  describe('searchCep', () => {
    it('should return the CEP information', async () => {
      const options: TextualOptions = {
        state: 'SP',
        city: 'São Paulo',
        neighborhood: 'Sé',
        logradouro: 'Praça da Sé'
      };
      const result = await cepAberto.searchCep(options);
      expect(result).toHaveProperty('cep', '01001000');
    });

    it('should return an empty object if the CEP is not found', async () => {
      const options: TextualOptions = {
        state: 'DF',
        city: 'Little Whinging',
        neighborhood: 'Surrey',
        logradouro: 'Rua dos Alfeneiros, nº 4'
      };
      const result = await cepAberto.searchCep(options);
      expect(result).toHaveProperty("message");
    });

  });

  describe('getCitiesByState', () => {
    it('should return the cities of the state', async () => {
      const state: State = 'SP';
      const result = await cepAberto.getCitiesByState(state);
      expect(result).toContainEqual({ nome: 'São Paulo' });
    });
    
    
    it('should return an empty array if the state is not found', async () => {
      //@ts-ignore
      const state: State = 'XX';
      const result = await cepAberto.getCitiesByState(state);
      expect(result).toEqual([]);
    });
    

  });

  describe("updateCepbyNumber", () => {
    it("should update the CEP information", async () => {
      const ceps = ['32371380', '41400120', '36420000']
      const result = await cepAberto.updateCepbyNumber(ceps);
      expect(result).toHaveProperty('cep', ceps[0]);
    });
  });

});