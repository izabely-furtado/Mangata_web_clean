
import { MockRandom } from "app/utils/mock-random";
import { Colaborador, ColaboradorMock } from "../colaborador/colaborador";
import { AreaAtuacaoEnum, AreaAtuacaoEnumMock } from "../enum/area-atuacao.enum";
import { SituacaoEnum, SituacaoEnumMock } from "../enum/situacao.enum";

export interface IdentidadeVisual {
    razao_social: string
    cnpj?: string
    nome_fantasia?: string
    fundado_em?: Date
    area_atuacao?: AreaAtuacaoEnum
    vende_alcool: boolean
    licenca_venda_alcool?: File | HTMLImageElement | string
    identidade_visual?: string//IdentidadeVisual
    funcionarios?: Colaborador[]
    status_licenca: SituacaoEnum
    valido?: boolean
}

export class IdentidadeVisualMock {
    static lista: IdentidadeVisual[];

    public static getMock(): IdentidadeVisual {
        return {
            razao_social: MockRandom.getUserName(),
            cnpj: MockRandom.getInteger(1, 1000000) + '',
            nome_fantasia: MockRandom.getUserName(),
            fundado_em: MockRandom.getDatePast(),
            area_atuacao: AreaAtuacaoEnumMock.getMock(),
            vende_alcool: MockRandom.getBoolean(),
            funcionarios: ColaboradorMock.getMockArray(10),
            status_licenca: SituacaoEnumMock.getMock(),
            valido: MockRandom.getBoolean()
        };
    }

    public static getMockArray(quantidade : number) : IdentidadeVisual[]{
        this.lista = [];
        for (let i = 0; i < quantidade; i++) {
            this.lista.push(IdentidadeVisualMock.getMock());
          }
        return this.lista;
    }
}
