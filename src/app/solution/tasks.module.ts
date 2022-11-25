import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { NgSelectModule } from '@ng-select/ng-select'
import { CommentsComponent } from './component/comments/comments.component'
import { ControlsComponent } from './component/controls/controls.component'
import { CreateComponent } from './component/create/create.component'
import { TagsComponent } from './component/tags/tags.component'
import { TaskComponent } from './component/task/task.component'
import { FilterByTagPipe } from './pipe/filter-by-tag.pipe'

import { TasksRoutingModule } from './tasks-routing.module'
import { TasksComponent } from './tasks.component'


@NgModule({
  declarations: [
    TasksComponent,
    ControlsComponent,
    TaskComponent,
    CommentsComponent,
    TagsComponent,
    FilterByTagPipe,
    CreateComponent
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
