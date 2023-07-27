export enum TipoPessoaEnum {
    fisica = 'Física',
    juridica = 'Jurídica'
}
  

var randomExt = require("random-ext");
export class TipoPessoaEnumMock {
    static lista: [TipoPessoaEnum.fisica, 
                   TipoPessoaEnum.juridica
                ];

    public static getMock(): TipoPessoaEnum {
        return TipoPessoaEnumMock.lista[randomExt.integer(6, 1)];
    }

    public static getMockArray(): TipoPessoaEnum[] {
        return TipoPessoaEnumMock.lista;
    }
                
}
