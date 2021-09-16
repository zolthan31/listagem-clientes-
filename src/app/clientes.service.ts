import { Injectable } from '@angular/core';
import { Cliente } from './clientes/clientes';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http: HttpClient) { }

  salvar(cliente: Cliente): Observable<any> {
    return this.http.post<Cliente>('http://localhost:8080/api/clientes', cliente);
  }

  // getClientes(): Observable<Cliente[]> {
  //   return null;
  // }

  getClientes() : Cliente[]{
    let cliente = new Cliente();
    cliente.id = 1;
    cliente.nome = 'Romulo';
    cliente.dataCadastro = '15/09/2021';
    cliente.cpf = '1234567890';
    return [cliente];
  }
}
