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
                icon: './assets/images/3D-Icons/52.png',
                url: './empresa'
            },
            {
                label: 'Visão Empresarial',
                icon: './assets/images/3D-Icons/23.png',
                url: './visao'
            },
            {
                label: 'Cadastros',
                icon: './assets/images/3D-Icons/32.png',
                url: './cadastros'
            },
            {
                label: 'Eventos',
                icon: './assets/images/3D-Icons/43.png',
                url: './eventos'
            },
            {
                label: 'Permissões',
                icon: './assets/images/3D-Icons/35.png',
                url: './permissoes'
            },
            {
                label: 'Ranking',
                icon: './assets/images/3D-Icons/55.png',
                url: './ranking'
            },
            {
                label: 'Faturamento',
                icon: './assets/images/3D-Icons/19.png',
                url: './faturamento'
            },
            {
                label: 'Perfil',
                icon: './assets/images/3D-Icons/18.png',
                url: './perfil'
            }
        ];
    }
}
