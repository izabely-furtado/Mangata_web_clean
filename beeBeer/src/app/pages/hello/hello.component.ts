import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MockRandom } from '../../utils/mock-random';
import { EnderecoService } from 'app/services/endereco.service';
import cep from 'cep-promise'; //https://www.npmjs.com/package/cep-promise
import { Cidade } from 'app/models/cidade'; //https://www.npmjs.com/package/cidades-promise
const cidades = require('cidades-promise');

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent {
    name = MockRandom.getSentence() + "";

    formGroup!: FormGroup;

    categories: any[] = [
        { name: 'Accounting', key: 'A' },
        { name: 'Marketing', key: 'M' },
        { name: 'Production', key: 'P' },
        { name: 'Research', key: 'R' }
    ];
    cidade?: Cidade

    constructor(
        private enderecoService: EnderecoService,
      ) {
        this.getAllEstados();
        
      }

    ngOnInit() {
        this.formGroup = new FormGroup({
            selectedCategory: new FormControl()
        });
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
