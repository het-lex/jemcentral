import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ObjectiveComponent } from './objective/objective.component'

export const mainRoutes = {
  OBJECTIVE: 'objective',
  SOLUTION: 'solution'
}

const routes: Routes = [
  {
    path: '',
    redirectTo: mainRoutes.OBJECTIVE,
    pathMatch: 'full'
  },
  {
    path: mainRoutes.OBJECTIVE,
    component: ObjectiveComponent
  },
  {
    path: mainRoutes.SOLUTION,
    loadChildren: () => import('./solution/solution.module').then(m => m.SolutionModule)
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
