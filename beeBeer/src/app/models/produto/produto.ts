
import { MockRandom } from "app/utils/mock-random";
import { Imagem, ImagemMock } from "../imagem";
import { TipoProdutoEnum, TipoProdutoEnumMock } from "../enum/tipo-produto.enum";
import { SituacaoProdutoEnum, SituacaoProdutoEnumMock } from "../enum/situacao-produto.enum";

export interface Produto {
    id: string //decidir depois se vai virar number
    tipo: TipoProdutoEnum
    nome: string
    descricao?: string
    venda_pelo_app: boolean
    quantidade: number
    quantidade_vendidos?: number
    preco: number
    imagens: Imagem[]
    imagem_principal?: string //decidir se fica depois
    situacao_produto: SituacaoProdutoEnum
    possui_processo_de_preparo?: boolean //refernte a pedido
    //onde_comprar    esses dois serão numa proxima versão, 
    //onde_recuperar  quando existir mapa do local

    valido?: boolean
}

export class ProdutoMock {
    static lista: Produto[];

    public static getMock(): Produto {
        let quantidade_var = MockRandom.getInteger(1,10)
        return {
             id: MockRandom.getInteger(1, 100) + '',
             tipo: TipoProdutoEnumMock.getMock(),
             nome: MockRandom.getUserName(),
             descricao: MockRandom.getWord(10),
             venda_pelo_app: MockRandom.getBoolean(),
             quantidade: quantidade_var,
             preco: MockRandom.getFloat(1,10),
             imagens: ImagemMock.getMockArray(2),
             valido: MockRandom.getBoolean(),
             situacao_produto: SituacaoProdutoEnumMock.getMock(),
             quantidade_vendidos: 100 - quantidade_var,
             imagem_principal: quantidade_var + '.jpg'
        };
    }

    public static getMockByTipo(tipo: TipoProdutoEnum): Produto {
        return {
            id: MockRandom.getInteger(1, 100) + '',
            tipo: tipo,
            nome: MockRandom.getUserName(),
            descricao: MockRandom.getWord(10),
            venda_pelo_app: MockRandom.getBoolean(),
            quantidade: MockRandom.getInteger(1,10),
            preco: MockRandom.getFloat(1,10),
            imagens: ImagemMock.getMockArray(2),
            valido: MockRandom.getBoolean(),
            situacao_produto: SituacaoProdutoEnumMock.getMock()
        };
    }

    public static getMockArray(quantidade : number) : Produto[]{
        this.lista = [];
        for (let i = 0; i < quantidade; i++) {
            this.lista.push(ProdutoMock.getMock());
          }
        return this.lista;
    }

    public static getMockArrayByTipo(quantidade : number, tipo: TipoProdutoEnum) : Produto[]{
        this.lista = [];
        for (let i = 0; i < quantidade; i++) {
            this.lista.push(ProdutoMock.getMockByTipo(tipo));
          }
        return this.lista;
    }
}
