import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'

import { TasksRoutingModule } from './tasks-routing.module'
import { TasksComponent } from './tasks.component';
import { ControlsComponent } from './component/controls/controls.component';
import { TaskComponent } from './component/task/task.component';
import { CommentsComponent } from './component/comments/comments.component'


@NgModule({
  declarations: [
    TasksComponent,
    ControlsComponent,
    TaskComponent,
    CommentsComponent
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    HttpClientModule
  ]
})
export class TasksModule {
}
