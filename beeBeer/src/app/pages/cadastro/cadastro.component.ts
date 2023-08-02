import { Component } from '@angular/core';
import { MenuLateralComponent } from 'app/components/menu-lateral/menu-lateral.component';
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
  items2: MenuItem[] | undefined;
  position: string = 'top';
  positionOptions: any

  home: MenuItem | undefined;

  statuses!: any[];
  responsiveOptions;

  ////

  constructor(private messageService: MessageService, private confirmationService: ConfirmationService) { 
    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
  ];
  }

  ngOnInit() {
    this.items = [{ label: 'Cadastro' }];

    this.home = { icon: 'pi pi-home', routerLink: '/' };

    this.items2 = MenuLateralComponent.getItems();
    this.positionOptions = MenuLateralComponent.positionOptions;

    
    
  }

  abrirLink(url: string) {
    window.open(url, '_self');
  }
  
}
