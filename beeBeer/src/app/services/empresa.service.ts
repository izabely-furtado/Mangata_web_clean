import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Empresa, EmpresaMock } from '../models/empresa/empresa';
import { environment } from '../../enviroments/environment.prod';
import { AreaAtuacaoEnum } from 'app/models/enum/area-atuacao.enum';
import { SituacaoEnum } from 'app/models/enum/situacao.enum';

@Injectable({
  providedIn: 'root',
})
export class EmpresaService {
  url = environment.apiUrl + '/empresa';

  constructor(private http: HttpClient) {}

  // Retorna todos
  getAllEmpresas(): Observable<Empresa[]> {
    if (environment.mock) {
        return of(EmpresaMock.getMockArray(20));
    }
    else {
        return this.http.get<Empresa[]>(this.url);
    }
  }

  // Retorna todos
  getEmpresasByArea(area: AreaAtuacaoEnum): Observable<Empresa[]> {
    if (environment.mock) {
        return of(EmpresaMock.getMockArrayByArea(20, area));
    }
    else {
        return this.http.get<Empresa[]>(this.url);
    }
  }

  // Retorna todos
  getEmpresasBySituacao(situacao: SituacaoEnum): Observable<Empresa[]> {
    if (environment.mock) {
        return of(EmpresaMock.getMockArrayBySituacao(20, situacao));
    }
    else {
        return this.http.get<Empresa[]>(this.url);
    }
  }

  // Retorna um produto pelo ID
  getEmpresaById(id: number): Observable<Empresa> {
    if (environment.mock) {
        return of(EmpresaMock.getMock());
    }
    else {
        return this.http.get<Empresa>(`${this.url}/${id}`);
    }
  }

  // Adiciona um novo
  addEmpresa(perfil: Empresa): Observable<Empresa> {
    if (environment.mock) {
        return of(EmpresaMock.getMock());
    }
    else {
        return this.http.post<Empresa>(this.url, perfil);
    }
  }

  // Atualiza um existente
  updateEmpresa(perfil: Empresa): Observable<Empresa> {
    if (environment.mock) {
        return of(EmpresaMock.getMock());
    }
    else {
        return this.http.put<Empresa>(`${this.url}/${perfil.id}`, perfil);
    }
  }

  // Remove um pelo ID
  deleteEmpresaById(id: number): Observable<void> {
    if (environment.mock) {
        return of();
    }
    else {
        return this.http.delete<void>(`${this.url}/${id}`);
    }
  }

}
