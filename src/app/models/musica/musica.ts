
import { MockRandom } from "app/utils/mock-random";
import { EstilosMusicaisEnum, EstilosMusicaisEnumMock } from "../enum/estilos-musicais.enum";

export interface Musica {
    id: string;
    link: string //spotify ou youtube
    nome: string
    estilo_musical: EstilosMusicaisEnum[]
    autor: string
    valido?: boolean
}

export class MusicaMock {
    static lista: Musica[];

    public static getMock(): Musica {
        return {
            id: MockRandom.getInteger(1, 100) + '',
            link: MockRandom.getEmail(),
            nome: MockRandom.getName(),
            estilo_musical: EstilosMusicaisEnumMock.getMockArray(),
            autor: MockRandom.getName(),
            valido: MockRandom.getBoolean()
        };
    }

    public static getMockArray(quantidade : number) : Musica[]{
        this.lista = [];
        for (let i = 0; i < quantidade; i++) {
            this.lista.push(MusicaMock.getMock());
          }
        return this.lista;
    }
}
