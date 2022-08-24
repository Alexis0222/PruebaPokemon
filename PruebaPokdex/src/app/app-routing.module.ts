import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetallePokeComponent } from './Componentes/detalle-poke/detalle-poke.component';
import { PokeGridComponent } from './Componentes/poke-grid/poke-grid.component';
const routes: Routes = [
  {path: 'home',component:PokeGridComponent},
  {path: 'DetallesPoke/:id',component:DetallePokeComponent},
  {path: '',pathMatch:'full',redirectTo:'home'},
  {path: '**',pathMatch:'full',redirectTo:'home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
