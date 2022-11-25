import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { Task } from '../../models/tasks.model'
import { TasksService } from '../../service/tasks.service'

@Component({
  selector: 'tt-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  task: Task = new Task(this.tasks.list.value.length.toString(), '', '', [])
  @Output() closed: EventEmitter<Task | null> = new EventEmitter<Task | null>()

  constructor(public tasks: TasksService) {
  }

  ngOnInit(): void {
  }

}
