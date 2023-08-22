import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent {
  name = 'Jane';

  items: MenuItem[] | undefined;

    home: MenuItem | undefined;

    ngOnInit() {
        this.items = [{ label: 'Perfil' }];

        this.home = { icon: 'pi pi-home', routerLink: '/' };
    }
}
