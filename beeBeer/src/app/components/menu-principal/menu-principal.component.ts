import { Component } from '@angular/core';
import { MenuItem  } from 'primeng/api';


@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.scss']
})
export class MenuPrincipalComponent {
  items: MenuItem[] | undefined;

    position: string = 'top';

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
                icon: './assets/images/3D-Icons/53.png'
            },
            {
                label: 'Visão Empresarial',
                icon: './assets/images/3D-Icons/23.png'
            },
            {
                label: 'Cadastros',
                icon: './assets/images/3D-Icons/38.png'
            },
            {
                label: 'Eventos',
                icon: './assets/images/3D-Icons/43.png'
            },
            {
                label: 'Permissões',
                icon: './assets/images/3D-Icons/35.png'
            },
            {
                label: 'Os Melhores',
                icon: './assets/images/3D-Icons/55.png'
            },
            {
                label: 'Faturamento',
                icon: './assets/images/3D-Icons/19.png'
            },
            {
                label: 'Perfil',
                icon: './assets/images/3D-Icons/18.png'
            }
        ];
    }
}
