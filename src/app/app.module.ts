import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaVeiculosComponent } from './lista-veiculos/lista-veiculos.component';
import { CadastraVeiculosComponent } from './cadastra-veiculos/cadastra-veiculos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { VeiculosService } from './veiculos.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ListaVeiculosComponent,
    CadastraVeiculosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [VeiculosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
