import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from '../../enviroments/environment.prod';
import { Estado, EstadoMock } from '../models/estado';
import { Cidade, CidadeMock } from '../models/cidade';
const cidades = require('cidades-promise');

@Injectable({
  providedIn: 'root',
})
export class EnderecoService {
  constructor(private http: HttpClient) {}

  // Retorna todos os estados
  getAllEstados(): Observable<Estado[]> {
    if (environment.mock) {
        return of(EstadoMock.getMockArray(20));
    }
    else {
        return this.http.get<Estado[]>(environment.apiUrlEstados + "/estados");
    }
  }

  // Retorna todos os estados
  getEstadosByName(name: string): Observable<Estado[]> {
    if (environment.mock) {
        return of(EstadoMock.getMockArray(20));
    }
    else {
        return this.http.get<Estado[]>(environment.apiUrlEstados + "?q=" + name);
    }
  }


  // Retorna um estado pelo ID
  getEstadosById(id: string): Observable<Estado> {
    if (environment.mock) {
        return of(EstadoMock.getMock());
    }
    else {
        return this.http.get<Estado>(`${environment.apiUrlEstados}/${id}`);
    }
  }

  // Retorna todos as cidades de um estado
  getAllCidades(id: string): Observable<Estado> {
    if (environment.mock) {
        return of(EstadoMock.getMock());
    }
    else {
        return this.http.get<Estado>(`${environment.apiUrlEstados}/${id}/cidades`);
    }
  }

  // Retorna todos os estados
  getCidadesByName(id: string, name: string): Observable<Cidade[]> {
    if (environment.mock) {
        return of(CidadeMock.getMockArray(20));
    }
    else {
        return this.http.get<Cidade[]>(`${environment.apiUrlEstados}/${id}/cidades` + "?q=" + name);
    }
  }


}



