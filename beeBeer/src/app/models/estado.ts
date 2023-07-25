import { MockRandom } from "../utils/mock-random";
import { Cidade, CidadeMock } from "./cidade";

export interface Estado {
    id:  string;
    estado: string;
    cidades: Cidade[]
}

export class EstadoMock {
    static lista: Estado[];

    public static getMock(): Estado {
        return {
            id:  MockRandom.getLetter() + MockRandom.getLetter(),
            estado: MockRandom.getString(),
            cidades: CidadeMock.getMockArray(3)
        };
    }

    public static getMockArray(quantidade : number) : Estado[]{
        this.lista = [];
        for (let i = 0; i < quantidade; i++) {
            this.lista.push(EstadoMock.getMock());
          }
        return this.lista;
    }
}
