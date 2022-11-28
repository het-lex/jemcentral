import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskComponent } from './component/task/task.component'
import { TasksComponent } from './tasks.component'

const routes: Routes = [
  {
    path: '',
    component: TasksComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule { }
