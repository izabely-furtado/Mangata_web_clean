import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Perfil, PerfilMock } from 'app/models/perfil';
import { environment } from 'enviroments/environment.prod';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PerfilService {
  constructor(private http: HttpClient) {}

  // Retorna todos os produtos
  getAllPerfils(): Observable<Perfil[]> {
    if (environment.mock) {
        return of(PerfilMock.getMockArray(20));
    }
    else {
        return this.http.get<Perfil[]>(environment.apiUrl);
    }
  }

  // Retorna um produto pelo ID
  getPerfilById(id: number): Observable<Perfil> {
    if (environment.mock) {
        return of(PerfilMock.getMock());
    }
    else {
        return this.http.get<Perfil>(`${environment.apiUrl}/${id}`);
    }
  }

  // Adiciona um novo produto
  addPerfil(perfil: Perfil): Observable<Perfil> {
    if (environment.mock) {
        return of(PerfilMock.getMock());
    }
    else {
        return this.http.post<Perfil>(environment.apiUrl, perfil);
    }
  }

  // Atualiza um produto existente
  updatePerfil(perfil: Perfil): Observable<Perfil> {
    if (environment.mock) {
        return of(PerfilMock.getMock());
    }
    else {
        return this.http.put<Perfil>(`${environment.apiUrl}/${perfil.id}`, perfil);
    }
  }

  // Remove um produto pelo ID
  deletePerfilById(id: number): Observable<void> {
    if (environment.mock) {
        return of();
    }
    else {
        return this.http.delete<void>(`${environment.apiUrl}/${id}`);
    }
  }

}
