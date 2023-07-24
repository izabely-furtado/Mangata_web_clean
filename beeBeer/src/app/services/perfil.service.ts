import { Injectable } from '@angular/core';
import { Perfil } from 'app/models/perfil';

@Injectable({
  providedIn: 'root',
})
export class PerfilService {
  private perfils: Perfil[] = [
    { id: 1, name: 'Produto A', price: 10, stockQuantity: 100 },
    { id: 2, name: 'Produto B', price: 20, stockQuantity: 50 },
    { id: 3, name: 'Produto C', price: 30, stockQuantity: 75 },
  ];

  constructor() {}

  // Retorna todos os produtos
  getAllPerfils(): Perfil[] {
    return this.perfils;
  }

  // Retorna um produto pelo ID
  getPerfilById(id: number): Perfil | undefined {
    return this.perfils.find((perfil) => perfil.id === id);
  }

  // Adiciona um novo produto
  addPerfil(perfil: Perfil): void {
    this.perfils.push(perfil);
  }

  // Atualiza um produto existente
  updatePerfil(perfil: Perfil): void {
    const index = this.perfils.findIndex((p) => p.id === perfil.id);
    if (index !== -1) {
      this.perfils[index] = perfil;
    }
  }

  // Remove um produto pelo ID
  deletePerfilById(id: number): void {
    this.perfils = this.perfils.filter((perfil) => perfil.id !== id);
  }
}
