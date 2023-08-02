import { Component } from '@angular/core';
import { MenuItem  } from 'primeng/api';


@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.scss']
})
export class MenuLateralComponent {
  items: MenuItem[] | undefined;

    position: string = 'left';

    positionOptions = [
        {
            label: 'Bottom',
            value: 'bottom'
        },
        {
            label: 'Top',
            value: 'top'
        },
        {
            label: 'Left',
            value: 'left'
        },
        {
            label: 'Right',
            value: 'right'
        }
    ];

    ngOnInit() {
        this.items = [
            {
                label: 'Empresa',
                icon: './assets/images/3D-Icons/60.png',
                url: './empresa',
                target: '_self'
            },
            {
                label: 'Colaboradores',
                icon: './assets/images/3D-Icons/37.png',
                url: './cadastro/colaborador',
                target: '_self'
            },
            {
                label: 'Permissões',
                icon: './assets/images/3D-Icons/39.png',
                url: './permissoes',
                target: '_self'
            },
            {
                label: 'Endereços',
                icon: './assets/images/3D-Icons/59.png',
                url: './cadastro/endereco',
                target: '_self'
            },
            {
                label: 'Eventos',
                icon: './assets/images/3D-Icons/13.png',
                url: './eventos',
                target: '_self'
            },
            {
                label: 'Produtos',
                icon: './assets/images/3D-Icons/17.png',
                url: './cadastro/produto',
                target: '_self'
            }
        ];
    }
}
