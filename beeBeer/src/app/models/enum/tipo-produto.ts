export enum TipoProdutoEnum {
    bebida = 'Bebida',
    comida = 'Comida',
    brinde = 'Brinde',
    outro = 'Outro'
}
  

var randomExt = require("random-ext");
export class TipoProdutoEnumMock {
    static lista: [TipoProdutoEnum.bebida, 
                   TipoProdutoEnum.comida,
                   TipoProdutoEnum.brinde,
                   TipoProdutoEnum.outro
                ];

    public static getMock(): TipoProdutoEnum {
        return TipoProdutoEnumMock.lista[randomExt.integer(6, 1)];
    }

    public static getMockArray(): TipoProdutoEnum[] {
        return TipoProdutoEnumMock.lista;
    }
                
}
