export enum TipoImagemEnum {
    logo = 'Logo Principal',
    logo_fundo_escuro = 'Logo para Fundo Escuro',
    logo_fundo_claro = 'Logo para Fundo Claro',
    banner = 'Banner',
    instagram = 'Instagram',
    perfil = 'Perfil',
    produto = 'Produto'
}
  

var randomExt = require("random-ext");
export class TipoImagemEnumMock {
    static lista: [TipoImagemEnum.logo, 
                   TipoImagemEnum.logo_fundo_escuro, 
                   TipoImagemEnum.logo_fundo_claro, 
                   TipoImagemEnum.banner, 
                   TipoImagemEnum.instagram,
                   TipoImagemEnum.perfil,
                   TipoImagemEnum.produto
                ];

    public static getMock(): TipoImagemEnum {
        return TipoImagemEnumMock.lista[randomExt.integer(6, 1)];
    }

    public static getMockArray(): TipoImagemEnum[] {
        return TipoImagemEnumMock.lista;
    }
                
}
