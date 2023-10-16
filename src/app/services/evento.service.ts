import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Evento, EventoMock } from '../models/evento/evento';
import { environment } from '../../enviroments/environment';
import { Permissao, PermissaoMock } from 'app/models/evento/permissao';

@Injectable({
  providedIn: 'root',
})
export class EventoService {
  url = environment.apiUrl + '/evento';

  constructor(private http: HttpClient) {}

  // Retorna todos
  getAllEventos(): Observable<Evento[]> {
    if (environment.mock) {
        return of(EventoMock.getMockArray(20));
    }
    else {
        return this.http.get<Evento[]>(this.url);
    }
  }

  // Retorna um pelo ID
  getEventoById(id: number): Observable<Evento> {
    if (environment.mock) {
        return of(EventoMock.getMock());
    }
    else {
        return this.http.get<Evento>(`${this.url}/${id}`);
    }
  }

  // Retorna um pelo ID
  getAllPermissoes(id: number): Observable<Permissao[]> {
    if (environment.mock) {
        return of(PermissaoMock.getMockArray(10));
    }
    else {
        return this.http.get<Permissao[]>(`${this.url}/permissao/${id}`);
    }
  }

  // Adiciona um novo
  addEvento(perfil: Evento): Observable<Evento> {
    if (environment.mock) {
        return of(EventoMock.getMock());
    }
    else {
        return this.http.post<Evento>(this.url, perfil);
    }
  }

  // Atualiza um existente
  updateEvento(perfil: Evento): Observable<Evento> {
    if (environment.mock) {
        return of(EventoMock.getMock());
    }
    else {
        return this.http.put<Evento>(`${this.url}/${perfil.id}`, perfil);
    }
  }

  // Remove um pelo ID
  deleteEventoById(id: number): Observable<void> {
    if (environment.mock) {
        return of();
    }
    else {
        return this.http.delete<void>(`${this.url}/${id}`);
    }
  }

}
