import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
{path:'cricket',loadChildren:'app/cricket/cricket.module#CricketModule'},
{path:'football',loadChildren:'app/football/football.module#FootballModule'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
