import { Cidade, CidadeClass } from 'app/models/cidade';
import { Erro } from 'app/models/erro';
import { EnderecoService } from 'app/services/endereco.service';
import cep from 'cep-promise'
const cidades = require('cidades-promise');

export class Endereco {
    
    public static getCidadesByEstado(estadoSigla : string): Cidade {
        let retorno: Cidade = new CidadeClass('');
        cidades.getCitiesByState(estadoSigla)
        .then((res: Cidade) => {
            retorno = res
        })
        .catch((erro: Erro) => {
            console.error(erro.erro)
        })
        return retorno
    }

    public static getCidadesByDDD(ddd : number): Cidade {
        let retorno: Cidade = new CidadeClass('');
        cidades.getCitiesByDdd(ddd)
        .then((res: Cidade) => {
            retorno = res
        })
        .catch((erro: Erro) => {
            window.alert(erro.erro)
        })
        return retorno
    }


}