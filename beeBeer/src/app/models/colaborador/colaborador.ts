
import { MockRandom } from "app/utils/mock-random";
import { Login, LoginMock } from "./login";
import { Permissao, PermissaoMock } from "./permissao";
import { TipoPermissaoEnum, TipoPermissaoEnumMock } from "../enum/tipo-permissao.enum";

export interface Colaborador {
    id: string;
    login: Login
    nome: string
    apelido?: string
    cpf?: string
    nascimento: Date
    permissoes: TipoPermissaoEnum[] // decidir depois se crio um objeto
    imagem: string
    valido?: boolean
    pix?: string
}

export class ColaboradorMock {
    static lista: Colaborador[];

    public static getMock(): Colaborador {
        let quantidade_var = MockRandom.getInteger(1,10)
        return {
            id: MockRandom.getInteger(1, 100) + '',
            login: LoginMock.getMock(),
            nome: MockRandom.getUserName(),
            apelido: MockRandom.getUserName(),
            cpf: MockRandom.getInteger(100, 999) + '.' + MockRandom.getInteger(100, 999) + '.' + MockRandom.getInteger(100, 999) + '-' + MockRandom.getInteger(10, 99),
            nascimento: MockRandom.getDatePast(),
            permissoes: TipoPermissaoEnumMock.getMockArray(),
            imagem: quantidade_var + '.jpg',
            valido: MockRandom.getBoolean()
        };
    }

    public static getMockArray(quantidade : number) : Colaborador[]{
        this.lista = [];
        for (let i = 0; i < quantidade; i++) {
            this.lista.push(ColaboradorMock.getMock());
          }
        return this.lista;
    }
}
