export interface Perfil {
    id: number;        
    name: string;      
    price: number;    
    quantity: number; 
}

var randomExt = require("random-ext");
export class PerfilMock {
    static lista: Perfil[];

    public static getMock(): Perfil {
        return {
            id: randomExt.integer(99, 1),
            name: randomExt.string(20, 10),
            price: randomExt.float(10.523, 3.021),
            quantity: randomExt.integer(99, 10),
        };
    }

    public static getMockArray(quantidade : number) : Perfil[]{
        this.lista = [];
        for (let i = 0; i < quantidade; i++) {
            this.lista.push(PerfilMock.getMock());
          }
        return this.lista;
    }
}
