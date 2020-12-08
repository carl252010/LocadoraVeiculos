import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VeiculosService } from '../veiculos.service';

@Component({
  selector: 'app-lista-veiculos',
  templateUrl: './lista-veiculos.component.html',
  styleUrls: ['./lista-veiculos.component.scss']
})
export class ListaVeiculosComponent implements OnInit {

  lista = []
  
  constructor(private router: Router, private servico: VeiculosService) { }

  ngOnInit(): void {
    this.servico.listar()
    .subscribe((respostaPositiva: any) => {
      this.lista = respostaPositiva.list;
    })
  }
  irParaCadastro(){
    this.router.navigate(['/cadastro']);
  }

}

