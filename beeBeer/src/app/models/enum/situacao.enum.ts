export enum SituacaoEnum {
    nao_iniciado = 'Não Iniciado',
    em_analise = 'Em análise',
    processando = 'Processando',
    pendente = 'Pendente',
    aprovado = 'Aprovado',
    reprovado = 'Reprovado'
}
  

var randomExt = require("random-ext");
export class SituacaoEnumMock {
    static lista: [SituacaoEnum.nao_iniciado,
                   SituacaoEnum.em_analise, 
                   SituacaoEnum.processando, 
                   SituacaoEnum.pendente, 
                   SituacaoEnum.aprovado, 
                   SituacaoEnum.reprovado
                ];

    public static getMock(): SituacaoEnum {
        return SituacaoEnumMock.lista[randomExt.integer(6, 1)];
    }

    public static getMockArray(): SituacaoEnum[] {
        return SituacaoEnumMock.lista;
    }
                
}
