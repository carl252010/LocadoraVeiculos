import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { veiculos } from '../models/veiculos';
import { VeiculosService } from '../veiculos.service';

@Component({
  selector: 'app-cadastra-veiculos',
  templateUrl: './cadastra-veiculos.component.html',
  styleUrls: ['./cadastra-veiculos.component.scss'],
})
export class CadastraVeiculosComponent implements OnInit {

  formulario: FormGroup;

  lista = []
  constructor(private fb: FormBuilder, private servico:VeiculosService) {
    this.formulario = fb.group({
      marca: ['', [Validators.required]],
      modelo: ['', [Validators.required]],
      ano: [0, [Validators.required, Validators.min(4)]],
      cor: ['',Validators.required],
      categoria:['', [Validators.required]]

    });
  }

  ngOnInit(): void {}

  deleteVeiculo(id){
    this.servico.deleteVeiculo(id)
    .subscribe(respostaPositiva => {
      alert('registro deletado com sucesso!');
      this.listar.length;   
    });
}
  listar(){
  this.servico.listar()
    .subscribe((respostaPositiva: any) => {
      this.lista = respostaPositiva.list;
      if(this.lista && this.lista.length == 0){
        alert('Nenhum registro encontrado!'); 
      }
    })
  }
  salvar(){
    //console.log(this.formulario)
    if(this.formulario.valid){
      this.servico.salvarCadastros(this.formulario.getRawValue())
      .subscribe(respostaPositiva => {
        alert('cadastrado com sucesso!');
        console.log(respostaPositiva);
        this.formulario.reset();
        this.servico.listar();
      });
    }
  }
  }



//  { marca: 'veiculo 1', modelo:1 , ano:1 , cor:'cor 1', categoria: 'CATEGORIA' },
   