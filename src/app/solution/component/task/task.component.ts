import { Component, Input } from '@angular/core'
import { Task } from '../../model/tasks.model'
import { TasksService } from '../../service/tasks.service'

@Component({
  selector: 'tt-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  @Input() task: Task | null = null
  @Input() onEdit: Task | null = null

  constructor(public tasks: TasksService) {
  }
}
