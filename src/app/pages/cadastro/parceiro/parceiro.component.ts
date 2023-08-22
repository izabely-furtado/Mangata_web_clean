import { Component } from '@angular/core';
import { Parceiro } from 'app/models/empresa/parceiro';
import { AreaAtuacaoEnum, AreaAtuacaoEnumMock } from 'app/models/enum/area-atuacao.enum';
import { TipoPermissaoEnum, TipoPermissaoEnumMock } from 'app/models/enum/tipo-permissao.enum';
import { TipoPessoaEnum, TipoPessoaEnumMock } from 'app/models/enum/tipo-pessoa.enum';
import { EmpresaService } from 'app/services/empresa.service';
import { GeralUtil } from 'app/utils/geral.util';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'app-parceiro',
  templateUrl: './parceiro.component.html',
  styleUrls: ['./parceiro.component.scss']
})
export class ParceiroComponent {
  items: MenuItem[] | undefined;
  home: MenuItem | undefined;

  parceiroDialog: boolean = false;
  lista!: Parceiro[];
  item!: Parceiro;
  selecteds!: Parceiro[] | null;

  submitted: boolean = false;

  permissoes: TipoPermissaoEnum[] = TipoPermissaoEnumMock.getMockArray();
  tipos_pessoas: TipoPessoaEnum[] = TipoPessoaEnumMock.getMockArray();
  areas_atuacao: AreaAtuacaoEnum[] = AreaAtuacaoEnumMock.getMockArray();

  constructor(private service: EmpresaService, private messageService: MessageService, private confirmationService: ConfirmationService) { }

  ngOnInit() {
    this.items = [{ label: 'Cadastro', url: './cadastro', target: '_self'}, { label: 'Parceiro' }];

    this.home = { icon: 'pi pi-home', routerLink: '/' };

    this.getAll();
  }

  openNew() {
    this.submitted = false;
    this.parceiroDialog = true;
  }

  getAll() {
    this.service.getAllParceiros(1).subscribe(
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

  edit(item: Parceiro) {
    this.item = { ...item };
    //fazer o check nos itens existentes no enum do item
    this.parceiroDialog = true;
  }

  delete(item: Parceiro) {
    this.confirmationService.confirm({
      message: 'Você tem certeza que deseja deletar ' + item.nome + '?',
      header: 'Confirmar',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.lista = this.lista.filter((val) => val.id !== item.id);
        this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Item Deletado', life: 3000 });
      }
    });
  }

  hideDialog() {
    this.parceiroDialog = false;
    this.submitted = false;
  }

  save() {
    this.submitted = true;

    if (this.item.nome?.trim()) {
      if (this.item.id) {
        this.lista[this.findIndexById(this.item.id)] = this.item;
        this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Item Atualizado', life: 3000 });
      } else {
        this.item.id = GeralUtil.createId();
        this.lista.push(this.item);
        this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Item Criado', life: 3000 });
      }

      this.lista = [...this.lista];
      this.parceiroDialog = false;
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
