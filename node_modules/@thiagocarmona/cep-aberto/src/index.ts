import axios, {AxiosError, AxiosInstance} from 'axios';
import { CepResult, TextualOptions, State, CitiesResult } from './types/types';

export default class CepAberto {

  private api: AxiosInstance;

  constructor(private token: string) {
    this.token = token;
    this.api = axios.create({
      baseURL: 'https://www.cepaberto.com/api/v3',
      headers: {
        "Authorization": `Token token=${this.token}`,
      }
    });
  }

  async getCepByNumber(cep: string): Promise<CepResult | {}> {

    try{
      const { data } = await this.api.get<CepResult>(`/cep`,{
        params: {
          cep
        }
      });
      return data;
    }catch(e){
      console.error(e);
      return {};
    }
  }

  /**
   * @deprecated
   * @param lat 
   * @param lng 
   * @returns 
   */
  async getCepCoordinates(lat: string, lng: string): Promise<CepResult | {}> {
    try{
      const { data } = await this.api.get<CepResult>(`/nearest`,{
        params: {
          lat,
          lng
        }
      });
      return data;
    }catch(e){
      console.error(e);
      return {};
    }
  }

  getCepByCoordinates = this.getCepCoordinates;

  async searchCep(options: TextualOptions): Promise<CepResult | {message: string }> {
    try{
      const { data } = await this.api.get<CepResult | {message: string}>(`/address`,{
        params: {
          estado: options.state,
          cidade: options.city,
          bairro: options.neighborhood,
          logradouro: options.logradouro
        }
      });

      return data;
    }catch(e){
      if(axios.isAxiosError(e)){
        const error: AxiosError<{message: string}> = e;
        if(error.response){
          return {message: error.response.data.message}
        }
      }
      return {message: "Erro desconhecido"}
    }

  }

  async getCitiesByState(state: State): Promise<CitiesResult[]> {
    try{
      const { data } = await this.api.get<CitiesResult[]>(`/cities`,{
        params: {
          estado: state
        }
      });
      return data;
    }catch(e){
      console.error(e);
      return [];
    }
  }

  async updateCepbyNumber(ceps: string[]): Promise<string[]> {
    if(ceps.length > 100){
      throw new Error("Max 100 ceps per request");
    }

    try{
      const { data } = await this.api.post<string[]>("/update/", {
        ceps: ceps.join(",")
      },{
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
      });
      return data;
    }catch(e){
      console.error(e);
      return [];
    }
  }

  updateToken(token: string): void {
    this.token = token;
    this.api.defaults.headers.Authorization = `Token token=${this.token}`;
  }

}



