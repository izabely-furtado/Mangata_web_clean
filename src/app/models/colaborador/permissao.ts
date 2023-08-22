
import { MockRandom } from "app/utils/mock-random";
import { TipoPermissaoEnum, TipoPermissaoEnumMock } from "../enum/tipo-permissao.enum";

export interface Permissao {
    id: number
    nome: string
    nivel: number
    descricao?: string
    paginas?: string
    tipo: TipoPermissaoEnum
}

export class PermissaoMock {
    static lista: Permissao[];

    public static getMock(): Permissao {
        return {
            id: MockRandom.getInteger(1, 100),
            nome: MockRandom.getName(),
            nivel: MockRandom.getInteger(1, 10),
            descricao: MockRandom.getSentence(),
            paginas: MockRandom.getUrl(),
            tipo: TipoPermissaoEnumMock.getMock()
        };
    }

    public static getMockArray(quantidade : number) : Permissao[]{
        this.lista = [];
        for (let i = 0; i < quantidade; i++) {
            this.lista.push(PermissaoMock.getMock());
          }
        return this.lista;
    }
}
