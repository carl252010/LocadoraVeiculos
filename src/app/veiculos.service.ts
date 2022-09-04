import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { veiculos } from './models/veiculos';

@Injectable()
export class VeiculosService {

  private baseUrl = 'http://localhost:5000/api/v1';

  constructor(private http: HttpClient) { }

  salvarCadastros(veiculos: veiculos){
    return this.http.post(this. baseUrl + '/add', veiculos)
  }

  atualizarCadastros(veiculos: veiculos){
    return this.http.put(this. baseUrl + '/put', veiculos)
  }

  listar(){
    return this.http.get(this.baseUrl + '/list');
  }

  deleteVeiculo(id){
    return this.http.delete(this. baseUrl + '/delete/' + id)
  }
}

