import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'

import { TasksRoutingModule } from './tasks-routing.module'
import { TasksComponent } from './tasks.component'


@NgModule({
  declarations: [
    TasksComponent
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    HttpClientModule
  ]
})
export class TasksModule {
}
