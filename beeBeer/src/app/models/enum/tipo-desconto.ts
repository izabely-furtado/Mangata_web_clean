export enum TipoDescontoEnum {
    porcentagem = 'Por Porcentagem',
    valor = 'Por valor'
}
  

var randomExt = require("random-ext");
export class TipoDescontoEnumMock {
    static lista: [TipoDescontoEnum.porcentagem, 
                   TipoDescontoEnum.valor
                ];

    public static getMock(): TipoDescontoEnum {
        return TipoDescontoEnumMock.lista[randomExt.integer(6, 1)];
    }

    public static getMockArray(): TipoDescontoEnum[] {
        return TipoDescontoEnumMock.lista;
    }
                
}
