import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DadosService {
  private apiUrl = 'http://127.0.0.1:5000/api/dados'; // URL do Flask

  constructor(private http: HttpClient) { }

  enviarLogin(dados: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, dados);
  }

  receberFeedbackLogin(dados: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, dados);
  }
}
