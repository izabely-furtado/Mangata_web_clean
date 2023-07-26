
import { MockRandom } from "app/utils/mock-random";
import { Login, LoginMock } from "./login";
import { Permissao, PermissaoMock } from "./permissao";

export interface Colaborador {
    login: Login
    nome: string
    apelido?: string
    cpf?: string
    nascimento: Date
    permissoes: Permissao[]
    valido?: boolean
}

export class ColaboradorMock {
    static lista: Colaborador[];

    public static getMock(): Colaborador {
        return {
            login: LoginMock.getMock(),
            nome: MockRandom.getUserName(),
            apelido: MockRandom.getUserName(),
            nascimento: MockRandom.getDatePast(),
            permissoes: PermissaoMock.getMockArray(10),
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
