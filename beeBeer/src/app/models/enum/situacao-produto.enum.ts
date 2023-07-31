export enum SituacaoProdutoEnum {
    em_estoque = 'Em estoque',
    baixo_estoque = 'Baixo Estoque',
    fora_estoque = 'Fora de Estoque'
}
  

var randomExt = require("random-ext");
export class SituacaoProdutoEnumMock {
    public static getMock(): SituacaoProdutoEnum {
        const randomIndex = Math.floor(Math.random() * this.getLista().length);
        return this.getLista()[randomIndex];
    }

    public static getMockArray(): SituacaoProdutoEnum[] {
        return this.getLista();
    }

    public static getLista(): SituacaoProdutoEnum[] {
        return [SituacaoProdutoEnum.em_estoque, 
            SituacaoProdutoEnum.baixo_estoque,
            SituacaoProdutoEnum.fora_estoque
         ];
    }
                
}
