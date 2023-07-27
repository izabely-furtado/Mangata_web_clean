
import { MockRandom } from "app/utils/mock-random";
import { Imagem, ImagemMock } from "../imagem";
import { Paleta, PaletaMock } from "./paleta";

export interface IdentidadeVisual {
    logo_fundo_claro: Imagem,
    logo_fundo_escuro: Imagem,
    paleta: Paleta,
    imagens: Imagem[]
    
    valido?: boolean
}

export class IdentidadeVisualMock {
    static lista: IdentidadeVisual[];

    public static getMock(): IdentidadeVisual {
        return {
            logo_fundo_claro: ImagemMock.getMock(),
            logo_fundo_escuro: ImagemMock.getMock(),
            paleta: PaletaMock.getMock(),
            imagens: ImagemMock.getMockArray(10),
            valido: MockRandom.getBoolean()
        };
    }

    public static getMockArray(quantidade : number) : IdentidadeVisual[]{
        this.lista = [];
        for (let i = 0; i < quantidade; i++) {
            this.lista.push(IdentidadeVisualMock.getMock());
          }
        return this.lista;
    }
}
