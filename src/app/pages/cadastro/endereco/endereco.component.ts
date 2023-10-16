import { Component } from '@angular/core';
import { Endereco } from 'app/models/endereco/endereco';
import { Estado } from 'app/models/endereco/estado';
import { Erro } from 'app/models/erro/erro';
import { EnderecoService } from 'app/services/endereco.service';
import { UsuarioService } from 'app/services/usuario.service';
import { EstadoService } from 'app/utils/estado.list';
import { GeralUtil } from 'app/utils/geral.util';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';
const cidades = require('cidades-promise'); //https://www.npmjs.com/package/cidades-promise

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.scss']
})
export class EnderecoComponent {
  items: MenuItem[] | undefined;
  home: MenuItem | undefined;

  productDialog: boolean = false;
  lista!: Endereco[];
  item!: Endereco;
  selecteds!: Endereco[] | null;

  submitted: boolean = false;

  estados: Estado[] = EstadoService.getLista()
  cidades: string[] = [];

  constructor(private service: EnderecoService, private serviceUsuario: UsuarioService, private messageService: MessageService, private confirmationService: ConfirmationService) { }

  ngOnInit() {
    this.items = [{ label: 'Cadastro', url: './cadastro', target: '_self'}, { label: 'Endereco' }];
    this.home = { icon: 'pi pi-home', routerLink: '/' };

    this.getAll();
    this.getCidades();
    this.getAllUsuarios();
  }

  openNew() {
    this.submitted = false;
    this.item = {} as Endereco;
    this.productDialog = true;
  }

  getAll() {
    this.service.getAllEnderecos().subscribe(
      data => {
        this.lista = data
      },
      error => {
        // Handle the error in case of failure
        console.error('Error fetching states:', error);
      }
    )
  }

  getAllUsuarios() {
    this.serviceUsuario.getAll().subscribe(
      data => {
        debugger
        console.log(data)
      },
      error => {
        // Handle the error in case of failure
        console.error('Error fetching states:', error);
      }
    )
  }

  getCidades() {
    cidades.getCitiesByState('ES')
      .then((res: string[]) => {
        this.cidades = res
      })
      .catch((erro: Erro) => {
          window.alert(erro.erro)
          return []
      })
  }

  deleteSelecteds() {
    this.confirmationService.confirm({
      message: 'Você tem certeza que deseja deletar selecionados?',
      header: 'Confirmar',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.lista = this.lista.filter((val) => !this.selecteds?.includes(val));
        this.selecteds = null;
        this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Item(ns) Deletado(s)', life: 3000 });
      }
    });
  }

  edit(product: Endereco) {
    this.item = { ...product };
    this.productDialog = true;
  }

  delete(item: Endereco) {
    this.confirmationService.confirm({
      message: 'Você tem certeza que deseja deletar ' + item.cep + ' - ' + item.numero + '?',
      header: 'Confirmar',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.lista = this.lista.filter((val) => val.id !== item.id);
        this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Item Deletado', life: 3000 });
      }
    });
  }

  hideDialog() {
    this.productDialog = false;
    this.submitted = false;
  }

  save() {
    this.submitted = true;

    if (this.item.cep.trim()) {
      if (this.item.id) {
        this.lista[this.findIndexById(this.item.id)] = this.item;
        this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Item Atualizado', life: 3000 });
      } else {
        this.item.id = GeralUtil.createId();
        this.lista.push(this.item);
        this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Item Criado', life: 3000 });
      }

      this.lista = [...this.lista];
      this.productDialog = false;
    }
  }

  findIndexById(id: string): number {
    let index = -1;
    for (let i = 0; i < this.lista.length; i++) {
      if (this.lista[i].id === id) {
        index = i;
        break;
      }
    }

    return index;
  }
}
