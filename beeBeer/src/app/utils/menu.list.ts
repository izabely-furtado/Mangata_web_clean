import { MenuItem } from "primeng/api";

export class MenuService {
    
  public static getPositionOptions() {
      return [
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
  }


  public static getItemsMenuCadastro(): MenuItem[] {
      return [
          {
              label: 'Colaboradores',
              icon: './assets/images/3D-Icons/60.png',
              url: './cadastro/colaborador',
              target: '_self'
          },
          {
            label: 'Parceiros',
            icon: './assets/images/3D-Icons/37.png',
            url: './cadastro/parceiro',
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

  public static getItemsMenu() {
    return [
        {
            label: 'Empresa',
            icon: './assets/images/3D-Icons/52.png',
            url: './empresa',
            target: '_self'
        },
        {
            label: 'Visão Empresarial',
            icon: './assets/images/3D-Icons/23.png',
            url: './visao',
            target: '_self'
        },
        {
            label: 'Cadastros',
            icon: './assets/images/3D-Icons/32.png',
            url: './cadastro',
            target: '_self'
        },
        {
            label: 'Eventos',
            icon: './assets/images/3D-Icons/43.png',
            url: './eventos',
            target: '_self'
        },
        {
            label: 'Permissões',
            icon: './assets/images/3D-Icons/35.png',
            url: './permissoes',
            target: '_self'
        },
        {
            label: 'Ranking',
            icon: './assets/images/3D-Icons/55.png',
            url: './ranking',
            target: '_self'
        },
        {
            label: 'Faturamento',
            icon: './assets/images/3D-Icons/19.png',
            url: './faturamento',
            target: '_self'
        },
        {
            label: 'Perfil',
            icon: './assets/images/3D-Icons/18.png',
            url: './perfil',
            target: '_self'
        }
    ];
  }

  public static getResponsiveOptions() {
    return [
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


}