import { MockRandom } from "app/utils/mock-random";

export interface Endereco {
    cep: string,
    state: string,
    city: string,
    street: string,
    neighborhood: string,
    service?: string
}

export class EnderecoClass implements Endereco {
    cep:  string;
    state: string;
    city: string;
    street: string;
    neighborhood: string;

    constructor(cep:  string, state: string, city: string, street: string, neighborhood: string) {
        this.cep = cep;
        this.state = state;
        this.city = city;
        this.street = street;
        this.neighborhood = neighborhood;
    }
}

export class EnderecoMock {
    static lista: Endereco[];

    public static getMock(): Endereco {
        return {
            cep:  MockRandom.getInteger(1, 99) + "",
            state: MockRandom.getString(),
            city: MockRandom.getString(),
            street: MockRandom.getString(),
            neighborhood: MockRandom.getString()
        };
    }

    public static getMockArray(quantidade : number) : Endereco[]{
        this.lista = [];
        for (let i = 0; i < quantidade; i++) {
            this.lista.push(EnderecoMock.getMock());
          }
        return this.lista;
    }
}
