
import { MockRandom } from "app/utils/mock-random";
import { Colaborador, ColaboradorMock } from "../colaborador/colaborador";
import { AreaAtuacaoEnum, AreaAtuacaoEnumMock } from "../enum/area-atuacao.enum";
import { SituacaoEnum, SituacaoEnumMock } from "../enum/situacao.enum";
import { IdentidadeVisual, IdentidadeVisualMock } from "./identidade-visual";
import { Endereco, EnderecoMock } from "../endereco/endereco";

export interface Empresa {
    id: number
    razao_social: string
    cnpj?: string
    nome_fantasia?: string
    fundado_em?: Date
    area_atuacao?: AreaAtuacaoEnum
    vende_alcool: boolean
    licenca_venda_alcool?: File | HTMLImageElement | string
    status_licenca: SituacaoEnum
    identidade_visual?: IdentidadeVisual
    funcionarios?: Colaborador[]
    enderecos?: Endereco[]
    
    valido?: boolean
}

export class EmpresaMock {
    static lista: Empresa[];

    public static getMock(): Empresa {
        return {
            id: MockRandom.getInteger(1, 100),
            razao_social: MockRandom.getUserName(),
            cnpj: MockRandom.getInteger(1, 1000000) + '',
            nome_fantasia: MockRandom.getUserName(),
            fundado_em: MockRandom.getDatePast(),
            area_atuacao: AreaAtuacaoEnumMock.getMock(),
            vende_alcool: MockRandom.getBoolean(),
            status_licenca: SituacaoEnumMock.getMock(),
            identidade_visual: IdentidadeVisualMock.getMock(),
            funcionarios: ColaboradorMock.getMockArray(10),
            enderecos: EnderecoMock.getMockArray(3),
            valido: MockRandom.getBoolean()
        };
    }

    public static getMockBySituacao(situacao: SituacaoEnum): Empresa {
        return {
            id: MockRandom.getInteger(1, 100),
            razao_social: MockRandom.getUserName(),
            cnpj: MockRandom.getInteger(1, 1000000) + '',
            nome_fantasia: MockRandom.getUserName(),
            fundado_em: MockRandom.getDatePast(),
            area_atuacao: AreaAtuacaoEnumMock.getMock(),
            vende_alcool: MockRandom.getBoolean(),
            status_licenca: situacao,
            identidade_visual: IdentidadeVisualMock.getMock(),
            funcionarios: ColaboradorMock.getMockArray(10),
            enderecos: EnderecoMock.getMockArray(3),
            valido: MockRandom.getBoolean()
        };
    }

    public static getMockByArea(area: AreaAtuacaoEnum): Empresa {
        return {
            id: MockRandom.getInteger(1, 100),
            razao_social: MockRandom.getUserName(),
            cnpj: MockRandom.getInteger(1, 1000000) + '',
            nome_fantasia: MockRandom.getUserName(),
            fundado_em: MockRandom.getDatePast(),
            area_atuacao: area,
            vende_alcool: MockRandom.getBoolean(),
            status_licenca: SituacaoEnumMock.getMock(),
            identidade_visual: IdentidadeVisualMock.getMock(),
            funcionarios: ColaboradorMock.getMockArray(10),
            enderecos: EnderecoMock.getMockArray(3),
            valido: MockRandom.getBoolean()
        };
    }

    public static getMockArray(quantidade : number) : Empresa[]{
        this.lista = [];
        for (let i = 0; i < quantidade; i++) {
            this.lista.push(EmpresaMock.getMock());
          }
        return this.lista;
    }

    public static getMockArrayByArea(quantidade : number, area: AreaAtuacaoEnum) : Empresa[]{
        this.lista = [];
        for (let i = 0; i < quantidade; i++) {
            this.lista.push(EmpresaMock.getMockByArea(area));
          }
        return this.lista;
    }

    public static getMockArrayBySituacao(quantidade : number, situacao: SituacaoEnum) : Empresa[]{
        this.lista = [];
        for (let i = 0; i < quantidade; i++) {
            this.lista.push(EmpresaMock.getMockBySituacao(situacao));
          }
        return this.lista;
    }

    
}
