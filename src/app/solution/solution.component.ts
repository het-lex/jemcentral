import { Component, OnInit } from '@angular/core';
import { TasksService } from './service/tasks.service'

@Component({
  selector: 'tt-solution',
  templateUrl: './solution.component.html',
  styleUrls: ['./solution.component.scss']
})
export class SolutionComponent implements OnInit {

  constructor(public tasks: TasksService) { }

  ngOnInit(): void {
  }

}
