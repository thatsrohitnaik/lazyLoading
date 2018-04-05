import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CricketRoutingModule } from './cricket-routing.module';
import { TeamsComponent } from './teams/teams.component';

@NgModule({
  imports: [
    CommonModule,
    CricketRoutingModule
  ],
  declarations: [TeamsComponent]
})
export class CricketModule { }
