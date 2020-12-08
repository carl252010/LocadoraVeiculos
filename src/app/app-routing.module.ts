import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastraVeiculosComponent } from './cadastra-veiculos/cadastra-veiculos.component';
import { ListaVeiculosComponent } from './lista-veiculos/lista-veiculos.component';

const routes: Routes = [
  { path:'' , component: ListaVeiculosComponent },
  { path:'cadastro' , component: CadastraVeiculosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
