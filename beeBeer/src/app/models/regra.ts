
import { MockRandom } from "../utils/mock-random";

export interface Regra {
    id: number;
    nome: string
    descricao?: string;
}

export class RegraMock {
    static lista: Regra[];

    public static getMock(): Regra {
        return {
            id: MockRandom.getInteger(1, 99),
            nome: MockRandom.getName(),
            descricao: MockRandom.getSentence()
        };
    }

    public static getMockArray(quantidade : number) : Regra[]{
        this.lista = [];
        for (let i = 0; i < quantidade; i++) {
            this.lista.push(RegraMock.getMock());
          }
        return this.lista;
    }
}
