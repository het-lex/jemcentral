import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NgbAccordionModule,
  NgbAlertModule,
  NgbNavModule
} from '@ng-bootstrap/ng-bootstrap'

const bootstrapModules = [
  NgbAlertModule,
  NgbAccordionModule,
  NgbNavModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...bootstrapModules
  ],
  exports: [
    ...bootstrapModules
  ]
})
export class BootstrapModule { }
