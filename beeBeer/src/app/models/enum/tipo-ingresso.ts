export enum TipoIngressoEnum {
    normal = 'Normal',
    meia = 'Meia',
    solidaria = 'Solidária',
    vip = 'VIP',
    gratuito = 'Gratuito'
}
  

var randomExt = require("random-ext");
export class TipoIngressoEnumMock {
    static lista: [TipoIngressoEnum.normal, 
                   TipoIngressoEnum.meia,
                   TipoIngressoEnum.solidaria,
                   TipoIngressoEnum.vip,
                   TipoIngressoEnum.gratuito
                ];

    public static getMock(): TipoIngressoEnum {
        return TipoIngressoEnumMock.lista[randomExt.integer(6, 1)];
    }

    public static getMockArray(): TipoIngressoEnum[] {
        return TipoIngressoEnumMock.lista;
    }
                
}
