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
  @Input() editMode: boolean = false
  @Input() autoSave: boolean = false
  changes: boolean = false

  constructor(public tasks: TasksService) {
  }

  ngOnInit(): void {
  }

  get task() {
    return this.tasks.selected
  }

  added(tag: Tag) {
    this.changes = true
    this.tasks.tags.update([tag])
  }

  changed(changed: Tag[]) {
    console.log(changed)
    this.changes = true
    if (this.autoSave) {
      this.save()
    }
  }

  save() {
    const {value} = this.task
    if (value) {
      value.tags = this.tags
      this.task.next(value)
      this.tasks.tags.update(value.tags)
      this.changes = false
      this.editMode = !value.tags.length
    }
  }

  cancel() {
    const {value} = this.task
    if (value) {
      this.tags = value.tags
      this.changes = false
      this.editMode = false
    }
  }
}
