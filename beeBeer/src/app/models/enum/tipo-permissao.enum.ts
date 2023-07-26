export enum TipoPermissaoEnum {
    administrativo = 'Administrativo',
    venda = 'Venda',
    cadastro = 'Cadastro',
    cancelamento = 'Cancelamento',
    exclusao = 'Exclusão',
    rh = 'Recursos Humanos',
    ingressos = 'Ingressos',
    eventos = 'Eventos',
    musical = 'Musical',
    influencer = 'Influencer'
}
  

var randomExt = require("random-ext");
export class TipoPermissaoEnumMock {
    static lista: [TipoPermissaoEnum.administrativo, 
                   TipoPermissaoEnum.venda, 
                   TipoPermissaoEnum.cadastro, 
                   TipoPermissaoEnum.cancelamento, 
                   TipoPermissaoEnum.exclusao,
                   TipoPermissaoEnum.rh,
                   TipoPermissaoEnum.ingressos,
                   TipoPermissaoEnum.eventos,
                   TipoPermissaoEnum.musical,
                   TipoPermissaoEnum.influencer
                ];

    public static getMock(): TipoPermissaoEnum {
        return TipoPermissaoEnumMock.lista[randomExt.integer(6, 1)];
    }

    public static getMockArray(): TipoPermissaoEnum[] {
        return TipoPermissaoEnumMock.lista;
    }
                
}
