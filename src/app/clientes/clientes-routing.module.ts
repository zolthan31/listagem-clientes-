import { ClientesListaComponent } from './clientes-lista/clientes-lista.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ ClientesFormComponent } from  './clientes-form/clientes-form.component';
import { ClientesListaComponent } from './clientes-lista/clientes-lista.component';

const routes: Routes = [
<<<<<<< HEAD
  { path: '' , component: ClientesFormComponent },
  { path: '', component: ClientesListaComponent }
=======
  { path: 'clientes-form', component: ClientesFormComponent },
  { path: 'clientes-lista', component: ClientesListaComponent}
>>>>>>> fd6abe869bf8bde30e8de80897d79423fd153dba
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
