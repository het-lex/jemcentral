import { Component, OnInit } from '@angular/core'
import { TasksService } from '@service/tasks.service'

@Component({
  selector: 'tt-solution',
  templateUrl: './tasks.component.html'
})
export class TasksComponent implements OnInit {
  constructor(public tasks: TasksService) {
  }

  ngOnInit(): void {
    this.tasks.getTasks()
  }
}
