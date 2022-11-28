import { Pipe, PipeTransform } from '@angular/core'
import { Tag, Task } from '@model/tasks.model'

@Pipe({
  name: 'filterByTag'
})
export class FilterByTagPipe implements PipeTransform {

  transform(tasks: Task[], tags: Tag[]): Task[] {
    if (tags.length) {
      return tasks.filter(task => task.tags.some(tag => tags.includes(tag)))
    }
    return tasks
  }

}
