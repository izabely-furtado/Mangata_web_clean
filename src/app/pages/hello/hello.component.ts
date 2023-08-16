import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MockRandom } from '../../utils/mock-random';
import { Cidade } from 'app/models/endereco/cidade'; 
import { Endereco, EnderecoClass } from 'app/models/endereco/endereco';
import { EnderecoUtil } from 'app/utils/endereco.util';
import cep from 'cep-promise'; //https://www.npmjs.com/package/cep-promise
import { ErroCEP } from 'app/models/erro/erro-cep';
const cidades = require('cidades-promise'); //https://www.npmjs.com/package/cidades-promise

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent {
    name = MockRandom.getSentence() + "";
    cep = cep;
    formGroup!: FormGroup;

    categories: any[] = [
        { name: 'Accounting', key: 'A' },
        { name: 'Marketing', key: 'M' },
        { name: 'Production', key: 'P' },
        { name: 'Research', key: 'R' }
    ];
    cidade?: Cidade

    constructor(
      ) {
        //this.getAllEstados();
        
      }

    ngOnInit() {
        this.formGroup = new FormGroup({
            selectedCategory: new FormControl()
        });
        this.getEnderecoByCEP(29171069);
    }

    getEnderecoByCEP(cepNumber: number) {
      let retorno: Endereco = new EnderecoClass('', '', '', '', '');
      cep(cepNumber)
      .then((res: Endereco) => {
          retorno = res
          this.name = retorno.street
      })
      .catch((erro: ErroCEP) => {
          window.alert(erro.errors[0].message)
      })
    }

    getAllEstados(): void {
        cidades.getCitiesByDdd(27).then((res: Cidade) => {
            this.cidade = res;
            this.name = this.cidade.estado
        })
        
        // this.enderecoService.getAllEstados().subscribe(
        //   estados => {
        //     this.listaEstados.push(...estados);
        //     this.name = this.listaEstados[0].estado;
        //   },
        //   error => {
        //     // Handle the error in case of failure
        //     console.error('Error fetching states:', error);
        //   }
        // );
      }
}
