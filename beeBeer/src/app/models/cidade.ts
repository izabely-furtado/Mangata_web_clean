import { MockRandom } from "../utils/mock-random";

export interface Cidade {
    estado: string
    cidades?: string[]
}

export class CidadeMock {
    static lista: Cidade[];

    public static getMock(): Cidade {
        return {
            estado:  MockRandom.getLetter() + MockRandom.getLetter(),
            cidades: [MockRandom.getString(),MockRandom.getString()]
        };
    }

    public static getMockArray(quantidade : number) : Cidade[]{
        this.lista = [];
        for (let i = 0; i < quantidade; i++) {
            this.lista.push(CidadeMock.getMock());
          }
        return this.lista;
    }
}
