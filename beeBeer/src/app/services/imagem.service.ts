import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Imagem, ImagemMock } from '../models/imagem';
import { environment } from '../../enviroments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class ImagemService {
  constructor(private http: HttpClient) {}

  // Retorna todos
  getAllImagems(): Observable<Imagem[]> {
    if (environment.mock) {
        return of(ImagemMock.getMockArray(20));
    }
    else {
        return this.http.get<Imagem[]>(environment.apiUrl);
    }
  }

  // Retorna um produto pelo ID
  getImagemById(id: number): Observable<Imagem> {
    if (environment.mock) {
        return of(ImagemMock.getMock());
    }
    else {
        return this.http.get<Imagem>(`${environment.apiUrl}/${id}`);
    }
  }

  // Adiciona um novo
  addImagem(perfil: Imagem): Observable<Imagem> {
    if (environment.mock) {
        return of(ImagemMock.getMock());
    }
    else {
        return this.http.post<Imagem>(environment.apiUrl, perfil);
    }
  }

  // Atualiza um existente
  updateImagem(perfil: Imagem): Observable<Imagem> {
    if (environment.mock) {
        return of(ImagemMock.getMock());
    }
    else {
        return this.http.put<Imagem>(`${environment.apiUrl}/${perfil.id}`, perfil);
    }
  }

  // Remove um pelo ID
  deleteImagemById(id: number): Observable<void> {
    if (environment.mock) {
        return of();
    }
    else {
        return this.http.delete<void>(`${environment.apiUrl}/${id}`);
    }
  }

}
