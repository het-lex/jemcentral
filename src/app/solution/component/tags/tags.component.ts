import { Component, Input, OnInit } from '@angular/core'
import { OFF, OnOff } from '@model/on-off.type'
import { Tag } from '@model/tasks.model'
import { TasksService } from '@service/tasks.service'

@Component({
  selector: 'tt-tags',
  templateUrl: './tags.component.html'
})
export class TagsComponent {
  @Input() tags: Tag[] = []
  @Input() autoSave: OnOff = OFF
  changes: boolean = false

  constructor(public tasks: TasksService) {
  }

  get task() {
    return this.tasks.selected
  }

  added(tag: Tag) {
    this.changes = true
    this.tasks.tags.update([tag])
  }

  changed(tags: Tag[]) {
    this.changes = true
    this.tags = tags
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
    }
  }

  cancel() {
    const {value} = this.task
    if (value) {
      this.tags = value.tags
      this.changes = false
    }
  }
}
