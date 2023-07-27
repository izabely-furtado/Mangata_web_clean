import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from '../../enviroments/environment.prod';
import { Produto, ProdutoMock } from 'app/models/produto/produto';
import { TipoProdutoEnum } from 'app/models/enum/tipo-produto';
import { Bebida, BebidaMock } from 'app/models/produto/bebida';
import { Comida, ComidaMock } from 'app/models/produto/comida';
import { Brinde, BrindeMock } from 'app/models/produto/brinde';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  constructor(private http: HttpClient) {}

  // Retorna todos
  getAllProdutos(): Observable<Produto[]> {
    if (environment.mock) {
        return of(ProdutoMock.getMockArray(20));
    }
    else {
        return this.http.get<Produto[]>(environment.apiUrl);
    }
  }

  // Retorna um produto pelo ID
  getProdutoById(id: number): Observable<Produto> {
    if (environment.mock) {
        return of(ProdutoMock.getMock());
    }
    else {
        return this.http.get<Produto>(`${environment.apiUrl}/${id}`);
    }
  }

  // Retorna todos do tipo de produto passado como parametro
  getAllByType(tipo: TipoProdutoEnum): Observable<Produto[]> {
    if (environment.mock) {
      return of(ProdutoMock.getMockArrayByTipo(20, tipo));
    }
    else {
      return this.http.get<Produto[]>(`${environment.apiUrl}/tipo/${tipo}`);
    }
  }  

  // Adiciona um novo
  addProduto(perfil: Produto): Observable<Produto> {
    if (environment.mock) {
        return of(ProdutoMock.getMock());
    }
    else {
        return this.http.post<Produto>(environment.apiUrl, perfil);
    }
  }

  // Atualiza um existente
  updateProduto(perfil: Produto): Observable<Produto> {
    if (environment.mock) {
        return of(ProdutoMock.getMock());
    }
    else {
        return this.http.put<Produto>(`${environment.apiUrl}/${perfil.id}`, perfil);
    }
  }

  // Remove um pelo ID
  deleteProdutoById(id: number): Observable<void> {
    if (environment.mock) {
        return of();
    }
    else {
        return this.http.delete<void>(`${environment.apiUrl}/${id}`);
    }
  }


  /////////////////////////BEBIDAS
  // Retorna um bebida pelo ID
  getBebidaById(id: number): Observable<Bebida> {
    if (environment.mock) {
        return of(BebidaMock.getMock());
    }
    else {
        return this.http.get<Bebida>(`${environment.apiUrl}/bebida/${id}`);
    }
  }

  // Retorna todas as bebidas
  getAllBebidasSimples(): Observable<Produto[]> {
    return this.getAllByType(TipoProdutoEnum.bebida);
  }

  // Retorna todas as bebidas
  getAllBebidas(): Observable<Bebida[]> {
    if (environment.mock) {
        return of(BebidaMock.getMockArray(20));
    }
    else {
      return this.http.get<Bebida[]>(`${environment.apiUrl}/bebida`);
    }
  }

  // Adiciona um novo
  addBebida(bebida: Bebida): Observable<Bebida> {
    if (environment.mock) {
        return of(BebidaMock.getMock());
    }
    else {
        return this.http.post<Bebida>(`${environment.apiUrl}/bebida`, bebida);
    }
  }

  // Atualiza um existente
  updateBebida(bebida: Bebida): Observable<Bebida> {
    if (environment.mock) {
        return of(BebidaMock.getMock());
    }
    else {
        return this.http.put<Bebida>(`${environment.apiUrl}/bebida/${bebida.produto.id}`, bebida);
    }
  }

  // Remove um pelo ID
  deleteBebidaById(id: number): Observable<void> {
    if (environment.mock) {
        return of();
    }
    else {
        return this.http.delete<void>(`${environment.apiUrl}/bebida/${id}`);
    }
  }

  /////////////////////////COMIDAS
  // Retorna um comida pelo ID
  getComidaById(id: number): Observable<Comida> {
    if (environment.mock) {
        return of(ComidaMock.getMock());
    }
    else {
        return this.http.get<Comida>(`${environment.apiUrl}/comida/${id}`);
    }
  }

  // Retorna todas as comidas
  getAllComidasSimples(): Observable<Produto[]> {
    return this.getAllByType(TipoProdutoEnum.comida);
  }

  // Retorna todas as comidas
  getAllComidas(): Observable<Comida[]> {
    if (environment.mock) {
        return of(ComidaMock.getMockArray(20));
    }
    else {
      return this.http.get<Comida[]>(`${environment.apiUrl}/comida`);
    }
  }

  // Adiciona um novo
  addComida(comida: Comida): Observable<Comida> {
    if (environment.mock) {
        return of(ComidaMock.getMock());
    }
    else {
        return this.http.post<Comida>(`${environment.apiUrl}/comida`, comida);
    }
  }

  // Atualiza um existente
  updateComida(comida: Comida): Observable<Comida> {
    if (environment.mock) {
        return of(ComidaMock.getMock());
    }
    else {
        return this.http.put<Comida>(`${environment.apiUrl}/comida/${comida.produto.id}`, comida);
    }
  }

  // Remove um pelo ID
  deleteComidaById(id: number): Observable<void> {
    if (environment.mock) {
        return of();
    }
    else {
        return this.http.delete<void>(`${environment.apiUrl}/comida/${id}`);
    }
  }

  /////////////////////////BRINDE
  // Retorna um brinde pelo ID
  getBrindeById(id: number): Observable<Brinde> {
    if (environment.mock) {
        return of(BrindeMock.getMock());
    }
    else {
        return this.http.get<Brinde>(`${environment.apiUrl}/brinde/${id}`);
    }
  }

  // Retorna todos os brindes
  getAllBrindesSimples(): Observable<Produto[]> {
    return this.getAllByType(TipoProdutoEnum.brinde);
  }

  // Retorna todas os brindes
  getAllBrindes(): Observable<Brinde[]> {
    if (environment.mock) {
        return of(BrindeMock.getMockArray(20));
    }
    else {
      return this.http.get<Brinde[]>(`${environment.apiUrl}/brinde`);
    }
  }

  // Adiciona um novo
  addBrinde(brinde: Brinde): Observable<Brinde> {
    if (environment.mock) {
        return of(BrindeMock.getMock());
    }
    else {
        return this.http.post<Brinde>(`${environment.apiUrl}/brinde`, brinde);
    }
  }

  // Atualiza um existente
  updateBrinde(brinde: Brinde): Observable<Brinde> {
    if (environment.mock) {
        return of(BrindeMock.getMock());
    }
    else {
        return this.http.put<Brinde>(`${environment.apiUrl}/brinde/${brinde.produto.id}`, brinde);
    }
  }

  // Remove um pelo ID
  deleteBrindeById(id: number): Observable<void> {
    if (environment.mock) {
        return of();
    }
    else {
        return this.http.delete<void>(`${environment.apiUrl}/brinde/${id}`);
    }
  }

  /////////////////////////OUTROS
  // Retorna todos outros produtos
  getAllOutrosSimples(): Observable<Produto[]> {
    return this.getAllByType(TipoProdutoEnum.outro);
  }

  // Retorna todas os outros
  getAllOutros(): Observable<Produto[]> {
    if (environment.mock) {
        return of(ProdutoMock.getMockArray(20));
    }
    else {
      return this.http.get<Produto[]>(`${environment.apiUrl}/outro`);
    }
  }

  // Adiciona um novo
  addOutro(produto: Produto): Observable<Produto> {
    if (environment.mock) {
        return of(ProdutoMock.getMock());
    }
    else {
        return this.http.post<Produto>(`${environment.apiUrl}/outro`, produto);
    }
  }

  // Atualiza um existente
  updateOutro(produto: Produto): Observable<Produto> {
    if (environment.mock) {
        return of(ProdutoMock.getMock());
    }
    else {
        return this.http.put<Produto>(`${environment.apiUrl}/outro/${produto.id}`, produto);
    }
  }

  // Remove um pelo ID
  deleteOutroById(id: number): Observable<void> {
    if (environment.mock) {
        return of();
    }
    else {
        return this.http.delete<void>(`${environment.apiUrl}/outro/${id}`);
    }
  }
  

  

}
