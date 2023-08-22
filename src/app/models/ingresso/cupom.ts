
import { MockRandom } from "app/utils/mock-random";
import { Desconto, DescontoMock } from "./desconto";

export interface Cupom {
    codigo: number
    nome: string
    desconto: Desconto
    validade: Date
    //regras: Regra[] //colocar isso no futuro
    
    valido?: boolean
}

export class CupomMock {
    static lista: Cupom[];

    public static getMock(): Cupom {
        return {
            codigo: MockRandom.getInteger(1, 100),
            nome: MockRandom.getUserName(),
            desconto: DescontoMock.getMock(),
            validade: MockRandom.getDateFuture(),
            valido: MockRandom.getBoolean()
        };
    }

    public static getMockArray(quantidade : number) : Cupom[]{
        this.lista = [];
        for (let i = 0; i < quantidade; i++) {
            this.lista.push(CupomMock.getMock());
          }
        return this.lista;
    }
}
