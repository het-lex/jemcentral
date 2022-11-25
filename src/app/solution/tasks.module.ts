import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { NgSelectModule } from '@ng-select/ng-select'
import { CommentsComponent } from './component/comments/comments.component'
import { ControlsComponent } from './component/controls/controls.component'
import { TagsComponent } from './component/tags/tags.component'
import { TaskComponent } from './component/task/task.component'

import { TasksRoutingModule } from './tasks-routing.module'
import { TasksComponent } from './tasks.component';
import { FilterByTagPipe } from './pipe/filter-by-tag.pipe'


@NgModule({
  declarations: [
    TasksComponent,
    ControlsComponent,
    TaskComponent,
    CommentsComponent,
    TagsComponent,
    FilterByTagPipe
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
