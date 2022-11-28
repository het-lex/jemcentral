import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { TasksRoutingModule } from './tasks-routing.module'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'

import { NgSelectModule } from '@ng-select/ng-select'

import { CommentsComponent } from '@component/comments/comments.component'
import { ControlsComponent } from '@component/controls/controls.component'

import { TasksComponent } from '@component/tasks/tasks.component'
import { TaskComponent } from '@component/task/task.component'
import { TagsComponent } from '@component/tags/tags.component'

import { FilterByTagPipe } from './pipe/filter-by-tag.pipe'
import { SafePipe } from './pipe/safe.pipe'



@NgModule({
  declarations: [
    TasksComponent,
    ControlsComponent,
    TaskComponent,
    CommentsComponent,
    TagsComponent,
    FilterByTagPipe,
    SafePipe
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    HttpClientModule,
    NgSelectModule,
    FormsModule
  ]
})
export class TasksModule {
}
