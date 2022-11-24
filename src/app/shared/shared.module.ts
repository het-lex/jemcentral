import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BootstrapModule } from './bootstrap/bootstrap.module'

const sharedModules = [
  BootstrapModule,
  HttpClientModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...sharedModules
  ],
  exports: [
    ...sharedModules
  ]
})
export class SharedModule { }
