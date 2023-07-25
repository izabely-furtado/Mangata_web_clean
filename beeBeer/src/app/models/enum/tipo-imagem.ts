export enum TipoImagem {
    logo = 'Logo Principal',
    logo_fundo_escuro = 'Logo para Fundo Escuro',
    logo_fundo_claro = 'Logo para Fundo Claro',
    banner = 'Banner',
    instagram = 'Instagram',
    perfil = 'Perfil',
}
  

var randomExt = require("random-ext");
export class TipoImagemMock {
    static lista: [TipoImagem.logo, 
                   TipoImagem.logo_fundo_escuro, 
                   TipoImagem.logo_fundo_claro, 
                   TipoImagem.banner, 
                   TipoImagem.instagram,
                   TipoImagem.perfil
                ];

    public static getMock(): TipoImagem {
        return TipoImagemMock.lista[randomExt.integer(6, 1)];
    }

    public static getMockArray(): TipoImagem[] {
        return TipoImagemMock.lista;
    }
                
}
