
import { MockRandom } from "app/utils/mock-random";
import { Login, LoginMock } from "./login";

export interface Usuario {
    id: string;
    login: Login
    nome: string
    apelido?: string
    cpf?: string
    nascimento: Date
    imagem: string
}

export class UsuarioMock {
    static lista: Usuario[];

    public static getMock(): Usuario {
        let quantidade_var = MockRandom.getInteger(1,10)
        return {
            id: MockRandom.getInteger(1, 100) + '',
            login: LoginMock.getMock(),
            nome: MockRandom.getUserName(),
            apelido: MockRandom.getUserName(),
            cpf: MockRandom.getInteger(100, 999) + '.' + MockRandom.getInteger(100, 999) + '.' + MockRandom.getInteger(100, 999) + '-' + MockRandom.getInteger(10, 99),
            nascimento: MockRandom.getDatePast(),
            imagem: quantidade_var + '.jpg'
        };
    }

    public static getMockArray(quantidade : number) : Usuario[]{
        this.lista = [];
        for (let i = 0; i < quantidade; i++) {
            this.lista.push(UsuarioMock.getMock());
          }
        return this.lista;
    }
}
