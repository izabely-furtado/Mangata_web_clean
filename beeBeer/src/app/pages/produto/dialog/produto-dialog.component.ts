import { Component } from '@angular/core';
import { SituacaoProdutoEnum, SituacaoProdutoEnumMock } from 'app/models/enum/situacao-produto.enum';
import { Produto } from 'app/models/produto/produto';
import { ProdutoService } from 'app/services/produto.service';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'app-produto-dialog',
  templateUrl: './produto-dialog.component.html',
  styleUrls: ['./produto-dialog.component.scss']
})
export class ProdutoDialogComponent {
  name = 'Jane';
  teste = undefined;
  valid = false;

  items: MenuItem[] | undefined;

  home: MenuItem | undefined;

  productDialog: boolean = false;

  products!: Produto[];

  product!: Produto;

  selectedProducts!: Produto[] | null;

  submitted: boolean = false;

  statuses: SituacaoProdutoEnum[] = SituacaoProdutoEnumMock.getMockArray();

  ////

  constructor(private productService: ProdutoService, private messageService: MessageService, private confirmationService: ConfirmationService) { }

  ngOnInit() {
    this.items = [{ label: 'Cadastro', url: './cadastro', target: '_self'}, { label: 'Produto' }];

    this.home = { icon: 'pi pi-home', routerLink: '/' };

    this.getProdutos();

    ///.then((data) => (this.products = data));

    
  }

  openNew() {
    this.product;
    this.submitted = false;
    this.productDialog = true;
  }

  getProdutos() {
    this.productService.getAllProdutos().subscribe(
      data => {
        this.products = data
      },
      error => {
        // Handle the error in case of failure
        console.error('Error fetching states:', error);
      }
    )
  }

  deleteSelectedProducts() {
    this.confirmationService.confirm({
      message: 'Você tem certeza que deseja deletar os produtos selecionados?',
      header: 'Confirmar',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.products = this.products.filter((val) => !this.selectedProducts?.includes(val));
        this.selectedProducts = null;
        this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Produto(s) Deletado(s)', life: 3000 });
      }
    });
  }

  editProduct(product: Produto) {
    this.product = { ...product };
    this.productDialog = true;
  }

  deleteProduct(product: Produto) {
    this.confirmationService.confirm({
      message: 'Você tem certeza que deseja deletar ' + product.nome + '?',
      header: 'Confirmar',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.products = this.products.filter((val) => val.id !== product.id);
        this.product;
        this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Produto Deletado', life: 3000 });
      }
    });
  }

  hideDialog() {
    this.productDialog = false;
    this.submitted = false;
  }

  saveProduct() {
    this.submitted = true;

    if (this.product.nome?.trim()) {
      if (this.product.id) {
        this.products[this.findIndexById(this.product.id)] = this.product;
        this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Produto Atualizado', life: 3000 });
      } else {
        this.product.id = this.createId();
        this.product.imagem_principal = 'product-placeholder.svg';
        this.products.push(this.product);
        this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Produto Criado', life: 3000 });
      }

      this.products = [...this.products];
      this.productDialog = false;
      this.product;
    }
  }

  findIndexById(id: string): number {
    let index = -1;
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === id) {
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

  getSeverity(status: SituacaoProdutoEnum) {
    debugger
    switch (status) {
      case SituacaoProdutoEnum.em_estoque:
        return 'success';
      case SituacaoProdutoEnum.baixo_estoque:
        return 'warning';
      case SituacaoProdutoEnum.fora_estoque:
        return 'danger';
    }
  }
}
