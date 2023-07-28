
import { MockRandom } from "app/utils/mock-random";
import { Imagem, ImagemMock } from "../imagem";
import { TipoProdutoEnum, TipoProdutoEnumMock } from "../enum/tipo-produto";

export interface Produto {
    //id: number
    tipo: TipoProdutoEnum
    nome: string
    descricao?: string
    venda_pelo_app: boolean
    quantidade: number
    valor: number
    imagens: Imagem[]
    //onde_comprar    esses dois serão numa proxima versão, 
    //onde_recuperar  quando existir mapa do local

    ///temporarios para analise
    id: string
    code: number
    name: string
    description: string
    image: string
    price: number
    category: string//'Accessories',
    quantity: number
    inventoryStatus: string//'INSTOCK',
    rating: number
    /////////
    valido?: boolean
}

export class ProdutoMock {
    static lista: Produto[];

    public static getMock(): Produto {
        return {
            // id: MockRandom.getInteger(1, 100),
             tipo: TipoProdutoEnumMock.getMock(),
             nome: MockRandom.getUserName(),
             descricao: MockRandom.getWord(10),
             venda_pelo_app: MockRandom.getBoolean(),
             quantidade: MockRandom.getInteger(1,10),
             valor: MockRandom.getFloat(1,10),
             imagens: ImagemMock.getMockArray(2),
             valido: MockRandom.getBoolean(),

            id: MockRandom.getInteger(1, 100) + '',
            code: MockRandom.getInteger(1, 100),
            name: MockRandom.getUserName(),
            description: MockRandom.getUserName(),
            image: MockRandom.getUserName(),
            price: MockRandom.getFloat(1, 100),
            category: 'Accessories',
            quantity: MockRandom.getInteger(1, 100),
            inventoryStatus: 'INSTOCK',
            rating: MockRandom.getInteger(1, 5)
        };
    }

    public static getMockByTipo(tipo: TipoProdutoEnum): Produto {
        return {
           // id: MockRandom.getInteger(1, 100),
            tipo: tipo,
            nome: MockRandom.getUserName(),
            descricao: MockRandom.getWord(10),
            venda_pelo_app: MockRandom.getBoolean(),
            quantidade: MockRandom.getInteger(1,10),
            valor: MockRandom.getFloat(1,10),
            imagens: ImagemMock.getMockArray(2),
            valido: MockRandom.getBoolean(),

            id: MockRandom.getInteger(1, 100) + '',
            code: MockRandom.getInteger(1, 100),
            name: MockRandom.getUserName(),
            description: MockRandom.getUserName(),
            image: MockRandom.getUserName(),
            price: MockRandom.getFloat(1, 100),
            category: MockRandom.getUserName(),//'Accessories',
            quantity: MockRandom.getInteger(1, 100),
            inventoryStatus: MockRandom.getUserName(),//'INSTOCK',
            rating: MockRandom.getInteger(1, 5)
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
