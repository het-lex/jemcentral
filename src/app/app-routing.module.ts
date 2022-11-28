import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { CommentsComponent } from './solution/component/comments/comments.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tasks',
    pathMatch: 'full'
  },
  {
    path: 'tasks',
    loadChildren: () => import('./solution/tasks.module').then(m => m.TasksModule)
  }, {
    path: '**',
    component: CommentsComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
