
import { MockRandom } from "app/utils/mock-random";
import { Colaborador, ColaboradorMock } from "../colaborador/colaborador";
import { Musica, MusicaMock } from "./musica";
import { EstilosMusicaisEnum, EstilosMusicaisEnumMock } from "../enum/estilos-musicais.enum";

export interface Playlist {
    id: string;
    link_spotify: string    //a pessoa pode decidir se insere a playlist por completo ou insere cada musica
    criado_por: Colaborador
    estilo_musical: EstilosMusicaisEnum[]
    musicas: Musica[]
    valido?: boolean
}

export class PlaylistMock {
    static lista: Playlist[];

    public static getMock(): Playlist {
        return {
            id: MockRandom.getInteger(1, 100) + '',
            link_spotify: MockRandom.getEmail(),
            criado_por: ColaboradorMock.getMock(),
            estilo_musical: EstilosMusicaisEnumMock.getMockArray(),
            musicas: MusicaMock.getMockArray(10),
            valido: MockRandom.getBoolean()
        };
    }

    public static getMockArray(quantidade : number) : Playlist[]{
        this.lista = [];
        for (let i = 0; i < quantidade; i++) {
            this.lista.push(PlaylistMock.getMock());
          }
        return this.lista;
    }
}
