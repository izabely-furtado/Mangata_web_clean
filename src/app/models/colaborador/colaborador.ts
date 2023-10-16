
import { MockRandom } from "app/utils/mock-random";
import { TipoPermissaoEnum, TipoPermissaoEnumMock } from "../enum/tipo-permissao.enum";
import { Usuario, UsuarioMock } from "../usuario/usuario";
import { Contato, ContatoMock } from "./contato";

export interface Colaborador {
    id: string;
    usuario: Usuario
    permissoes: TipoPermissaoEnum[] // decidir depois se crio um objeto
    valido?: boolean
    pix?: string
    contato: Contato
}

export class ColaboradorMock {
    static lista: Colaborador[];
 
    public static getMock(): Colaborador {
        return {
            id: MockRandom.getInteger(1, 100) + '',
            usuario: UsuarioMock.getMock(),
            permissoes: TipoPermissaoEnumMock.getMockArray(),
            valido: MockRandom.getBoolean(),
            contato: ContatoMock.getMock()
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
