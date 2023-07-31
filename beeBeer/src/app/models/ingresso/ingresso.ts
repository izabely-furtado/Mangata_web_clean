
import { MockRandom } from "app/utils/mock-random";
import { TipoIngressoEnum, TipoIngressoEnumMock } from "../enum/tipo-ingresso.enum";
import { Regra, RegraMock } from "../regra";

export interface Ingresso {
    id: number
    tipo: TipoIngressoEnum
    nome: string
    descricao?: string
    quantidade?: number
    valor?: number
    regras: Regra[]
    
    valido?: boolean
}

export class IngressoMock {
    static lista: Ingresso[];

    public static getMock(): Ingresso {
        return {
            id: MockRandom.getInteger(1, 100),
            tipo: TipoIngressoEnumMock.getMock(),
            nome: MockRandom.getUserName(),
            descricao: MockRandom.getWord(10),
            quantidade: MockRandom.getInteger(1,10),
            valor: MockRandom.getFloat(1,10),
            regras: RegraMock.getMockArray(2),
            valido: MockRandom.getBoolean()
        };
    }

    public static getMockArray(quantidade : number) : Ingresso[]{
        this.lista = [];
        for (let i = 0; i < quantidade; i++) {
            this.lista.push(IngressoMock.getMock());
          }
        return this.lista;
    }
}
