import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { BehaviorSubject, first, map, tap } from 'rxjs'
import { List } from '../models/list.model'
import { ITask, Tag, Task } from '../models/tasks.model'

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  list: BehaviorSubject<Task[]> = new BehaviorSubject<Task[]>([])
  selected: BehaviorSubject<Task | null> = new BehaviorSubject<Task | null>(null)

  tags: List<Tag> = new List<Tag>()

  constructor(private http: HttpClient) {
  }

  getTasks() {
    return this.http.get(`assets/mock/generated.json`)
      .pipe(
        first(),
        map(response => response as ITask[]),
        map(tasks => tasks.map(task => new Task(task.id, task.title, task.text, task.tags)))
      )
      .subscribe((tasks: Task[]) => this.list.next(tasks))
  }

  select(task: Task | null) {
    console.log(task)
    this.selected.next(task)
  }

  deselect() {
    this.select(null)
  }

  delete(task: Task) {
    console.log('delete', task)
  }

  edit(task: Task) {
    console.log('edit', task)
  }

  createTask(task: ITask) {
    const {length} = this.list.value
    this.list
      .pipe(
        map((tasks: Task[]) => [...tasks, new Task(`${length}`, task.title, task.text, task.tags)])
      )
  }
}
