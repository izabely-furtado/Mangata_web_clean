import { Component } from '@angular/core';
import { ProdutoService } from 'app/services/produto.service';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-produto-dialog',
  templateUrl: './produto-dialog.component.html',
  styleUrls: ['./produto-dialog.component.scss']
})
export class ProdutoDialogComponent {
  

  constructor(private productService: ProdutoService, private messageService: MessageService, private confirmationService: ConfirmationService) { }

  ngOnInit() {
        
  }

  
}
