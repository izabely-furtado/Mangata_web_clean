import { Component } from '@angular/core';
import { Produto } from 'app/models/produto/produto';
import { ProdutoService } from 'app/services/produto.service';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent {
  name = 'Jane';
  teste = undefined;
  valid = false;

  items: MenuItem[] | undefined;

  home: MenuItem | undefined;

  statuses!: any[];

  ////

  constructor(private messageService: MessageService, private confirmationService: ConfirmationService) { }

  ngOnInit() {
    this.items = [{ label: 'Cadastro' }];

    this.home = { icon: 'pi pi-home', routerLink: '/' };

    
  }

  
}
