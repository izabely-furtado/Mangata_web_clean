import { Component } from '@angular/core';
import { MenuService } from 'app/utils/menu.list';
import { MenuItem  } from 'primeng/api';


@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.scss']
})
export class MenuLateralComponent {
  items: MenuItem[] | undefined;

    position: string = 'left';

    public static positionOptions = MenuService.getPositionOptions

    ngOnInit() {
        this.items = MenuService.getItemsMenuCadastro();
    }
}
