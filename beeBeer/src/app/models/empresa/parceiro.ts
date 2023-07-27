
import { MockRandom } from "app/utils/mock-random";
import { TipoPessoaEnum, TipoPessoaEnumMock } from "../enum/tipo-pessoa";
import { Login, LoginMock } from "../colaborador/login";
import { AreaAtuacaoEnum, AreaAtuacaoEnumMock } from "../enum/area-atuacao.enum";
import { Imagem, ImagemMock } from "../imagem";

export interface Parceiro {
    id: number
    tipo_pessoa: TipoPessoaEnum
    cnpj?: string
    razao_social: string
    nome_fantasia?: string
    cpf?: string
    nome: string
    nascimento?: Date
    login: Login
    area_atuacao?: AreaAtuacaoEnum,
    imagens?: Imagem[]
    
    valido?: boolean
}

export class ParceiroMock {
    static lista: Parceiro[];

    public static getMock(): Parceiro {
        return {
            id: MockRandom.getInteger(1, 100),
            tipo_pessoa: TipoPessoaEnumMock.getMock(),
            cnpj: MockRandom.getInteger(1, 1000000) + '',
            razao_social: MockRandom.getUserName(),
            nome_fantasia: MockRandom.getUserName(),
            cpf: MockRandom.getInteger(1, 1000000) + '',
            nome: MockRandom.getUserName(),
            nascimento: MockRandom.getDatePast(),
            login: LoginMock.getMock(),
            area_atuacao: AreaAtuacaoEnumMock.getMock(),
            imagens: ImagemMock.getMockArray(10)
        };
    }

    public static getMockArray(quantidade : number) : Parceiro[]{
        this.lista = [];
        for (let i = 0; i < quantidade; i++) {
            this.lista.push(ParceiroMock.getMock());
          }
        return this.lista;
    }
}
