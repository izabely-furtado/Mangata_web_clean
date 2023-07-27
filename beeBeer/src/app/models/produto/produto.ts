
import { MockRandom } from "app/utils/mock-random";
import { Imagem, ImagemMock } from "../imagem";
import { TipoProdutoEnum, TipoProdutoEnumMock } from "../enum/tipo-produto";

export interface Produto {
    id: number
    tipo: TipoProdutoEnum
    nome: string
    descricao?: string
    venda_pelo_app: boolean
    quantidade: number
    valor: number
    imagens: Imagem[]
    //onde_comprar    esses dois serão numa proxima versão, 
    //onde_recuperar  quando existir mapa do local
    
    valido?: boolean
}

export class ProdutoMock {
    static lista: Produto[];

    public static getMock(): Produto {
        return {
            id: MockRandom.getInteger(1, 100),
            tipo: TipoProdutoEnumMock.getMock(),
            nome: MockRandom.getUserName(),
            descricao: MockRandom.getWord(10),
            venda_pelo_app: MockRandom.getBoolean(),
            quantidade: MockRandom.getInteger(1,10),
            valor: MockRandom.getFloat(1,10),
            imagens: ImagemMock.getMockArray(2),
            valido: MockRandom.getBoolean()
        };
    }

    public static getMockArray(quantidade : number) : Produto[]{
        this.lista = [];
        for (let i = 0; i < quantidade; i++) {
            this.lista.push(ProdutoMock.getMock());
          }
        return this.lista;
    }
}
