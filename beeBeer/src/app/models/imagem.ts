
import { MockRandom } from "../utils/mock-random";
import { TipoImagem, TipoImagemMock } from "./enum/tipo-imagem";

export interface Imagem {
    id: number;
    tipo: TipoImagem;  
    is_principal: boolean;
    largura?: number;
    altura?: number;
    descricao?: string;
    foto: File | HTMLImageElement | string;
}

export class ImagemMock {
    static lista: Imagem[];

    public static getMock(): Imagem {
        return {
            id: MockRandom.getInteger(1, 99),
            tipo: TipoImagemMock.getMock(),  
            is_principal: MockRandom.getBoolean(),
            largura: MockRandom.getFloat(1, 99),
            altura: MockRandom.getFloat(1, 99),
            descricao: MockRandom.getSentence(),
            foto: MockRandom.getString(),
        };
    }

    public static getMockArray(quantidade : number) : Imagem[]{
        this.lista = [];
        for (let i = 0; i < quantidade; i++) {
            this.lista.push(ImagemMock.getMock());
          }
        return this.lista;
    }
}
