import { Component, Input, OnInit } from '@angular/core'
import { Tag } from '../../models/tasks.model'
import { TasksService } from '../../service/tasks.service'

@Component({
  selector: 'tt-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {
  @Input() tags: Tag[] = []

  constructor(public tasks: TasksService) {
  }

  ngOnInit(): void {
  }
}
