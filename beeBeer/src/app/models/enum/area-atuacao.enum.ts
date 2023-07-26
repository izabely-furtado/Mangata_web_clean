export enum AreaAtuacaoEnum {
    show = 'Show',
    balada = 'Balada',
    aniversario15 = 'Aniversário de 15 anos',
    aniversario = 'Aniversário',
    palestra = 'Palestra',
    aula = 'Aula',
    teatro = 'Teatro',
    cinema = 'Cinema',
    standup = 'Standup',
    projeto = 'Projeto',
}
  

var randomExt = require("random-ext");
export class AreaAtuacaoEnumMock {
    static lista: [AreaAtuacaoEnum.show, 
                   AreaAtuacaoEnum.balada, 
                   AreaAtuacaoEnum.aniversario15, 
                   AreaAtuacaoEnum.aniversario, 
                   AreaAtuacaoEnum.palestra,
                   AreaAtuacaoEnum.aula,
                   AreaAtuacaoEnum.teatro,
                   AreaAtuacaoEnum.cinema,
                   AreaAtuacaoEnum.standup,
                   AreaAtuacaoEnum.projeto
                ];

    public static getMock(): AreaAtuacaoEnum {
        return AreaAtuacaoEnumMock.lista[randomExt.integer(6, 1)];
    }

    public static getMockArray(): AreaAtuacaoEnum[] {
        return AreaAtuacaoEnumMock.lista;
    }
                
}
