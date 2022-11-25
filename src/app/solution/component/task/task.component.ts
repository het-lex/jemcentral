import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { Task } from '../../models/tasks.model'

@Component({
  selector: 'tt-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input() task: Task | null = null
  @Output() deselect: EventEmitter<Task | null> = new EventEmitter<Task | null>()

  constructor() {
  }

  ngOnInit(): void {
  }

}
