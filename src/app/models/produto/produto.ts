
import { MockRandom } from "app/utils/mock-random";
import { Imagem, ImagemMock } from "../imagem";
import { TipoProdutoEnum, TipoProdutoEnumMock } from "../enum/tipo-produto.enum";
import { TipoMedidaEnum, TipoMedidaEnumMock } from "../enum/tipo-medida.enum";

export interface Produto {
    id: string //decidir depois se vai virar number
    tipo: TipoProdutoEnum
    nome: string
    descricao?: string
    quantidade: number //g se for comida e ml se for bebida e etc... usar as medidas equivalentes
    medida: TipoMedidaEnum
    imagens?: Imagem[]
    imagem_principal?: string //decidir se fica depois
    possui_processo_de_preparo?: boolean //refernte a pedido
    
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
             quantidade: quantidade_var,
             medida: TipoMedidaEnumMock.getMock(),
             imagem_principal: quantidade_var + '.jpg',
             valido: MockRandom.getBoolean(),
        };
    }

    public static getMockByTipo(tipo: TipoProdutoEnum): Produto {
        let quantidade_var = MockRandom.getInteger(1,10)
        return {
             id: MockRandom.getInteger(1, 100) + '',
             tipo: tipo,
             nome: MockRandom.getUserName(),
             descricao: MockRandom.getWord(10),
             quantidade: quantidade_var,
             medida: TipoMedidaEnumMock.getMock(),
             imagem_principal: quantidade_var + '.jpg',
             valido: MockRandom.getBoolean(),
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
