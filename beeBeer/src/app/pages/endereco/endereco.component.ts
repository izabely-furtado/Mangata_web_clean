import { Component } from '@angular/core';
import { Endereco } from 'app/models/endereco/endereco';
import { EnderecoService } from 'app/services/endereco.service';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';

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

  constructor(private service: EnderecoService, private messageService: MessageService, private confirmationService: ConfirmationService) { }

  ngOnInit() {
    this.items = [{ label: 'Cadastro', url: './cadastro', target: '_self'}, { label: 'Endereco' }];

    this.home = { icon: 'pi pi-home', routerLink: '/' };

    this.getAll();
  }

  openNew() {
    this.item;
    this.submitted = false;
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
        this.item;
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
        this.item.id = this.createId();
        this.lista.push(this.item);
        this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Item Criado', life: 3000 });
      }

      this.lista = [...this.lista];
      this.productDialog = false;
      this.item;
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

  createId(): string {
    let id = '';
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < 5; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
  }
}
