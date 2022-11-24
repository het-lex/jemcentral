import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module'

import { SolutionRoutingModule } from './solution-routing.module';
import { SolutionComponent } from './solution.component';


@NgModule({
  declarations: [
    SolutionComponent
  ],
  imports: [
    CommonModule,
    SolutionRoutingModule,
    SharedModule
  ]
})
export class SolutionModule { }
