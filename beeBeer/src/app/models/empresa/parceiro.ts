
import { MockRandom } from "app/utils/mock-random";
import { Login, LoginMock } from "../colaborador/login";
import { AreaAtuacaoEnum, AreaAtuacaoEnumMock } from "../enum/area-atuacao.enum";
import { Imagem, ImagemMock } from "../imagem";
import { TipoPessoaEnum, TipoPessoaEnumMock } from "../enum/tipo-pessoa.enum";

export interface Parceiro {
    id: string
    tipo_pessoa: TipoPessoaEnum
    documento?: string //cnpj se pessoa juridica e cpf se pessoa fisica
    razao_social?: string
    nome: string //nome-fantasia se pessoa juridica
    nascimento?: Date //fundado em em caso de pessoa juridica
    login: Login
    area_atuacao?: AreaAtuacaoEnum,
    imagem_principal: string // decidir o tipo depois
    //imagens?: Imagem[] // decidir se vou colocar depois
    
    valido?: boolean
}

export class ParceiroMock {
    static lista: Parceiro[];

    public static getMock(): Parceiro {
        let quantidade_var = MockRandom.getInteger(1,10)
        return {
            id: MockRandom.getInteger(1, 100) + '',
            tipo_pessoa: TipoPessoaEnumMock.getMock(),
            documento: MockRandom.getInteger(100, 999) + '.' + MockRandom.getInteger(100, 999) + '.' + MockRandom.getInteger(100, 999) + '-' + MockRandom.getInteger(10, 99),
            razao_social: MockRandom.getUserName(),
            nome: MockRandom.getUserName(),
            nascimento: MockRandom.getDatePast(),
            login: LoginMock.getMock(),
            area_atuacao: AreaAtuacaoEnumMock.getMock(),
            imagem_principal: quantidade_var + '.jpg'
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
