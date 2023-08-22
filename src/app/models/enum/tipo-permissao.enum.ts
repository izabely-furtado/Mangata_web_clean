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
    public static getMock(): TipoPermissaoEnum {
        const randomIndex = Math.floor(Math.random() * this.getLista().length);
        return this.getLista()[randomIndex];
    }

    public static getMockArray(): TipoPermissaoEnum[] {
        return TipoPermissaoEnumMock.getLista();
    }

    public static getLista(): TipoPermissaoEnum[] {
        return [TipoPermissaoEnum.administrativo, 
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
    }
                
}
