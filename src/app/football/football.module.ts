import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FootballRoutingModule } from './football-routing.module';
import { TeamsComponent } from './teams/teams.component';

@NgModule({
  imports: [
    CommonModule,
    FootballRoutingModule
  ],
  declarations: [TeamsComponent]
})
export class FootballModule { }
