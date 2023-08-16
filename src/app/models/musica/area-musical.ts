
import { MockRandom } from "app/utils/mock-random";
import { Colaborador, ColaboradorMock } from "../colaborador/colaborador";
import { Playlist, PlaylistMock } from "./playlist";

export interface AreaMusical {
    id: string;
    musicos: Colaborador[]
    playlist: Playlist[] //feita por cada musico
    valido?: boolean
}

export class AreaMusicalMock {
    static lista: AreaMusical[];

    public static getMock(): AreaMusical {
        return {
            id: MockRandom.getInteger(1, 100) + '',
            musicos: ColaboradorMock.getMockArray(10),
            playlist: PlaylistMock.getMockArray(10),
            valido: MockRandom.getBoolean()
        };
    }

    public static getMockArray(quantidade : number) : AreaMusical[]{
        this.lista = [];
        for (let i = 0; i < quantidade; i++) {
            this.lista.push(AreaMusicalMock.getMock());
          }
        return this.lista;
    }
}
