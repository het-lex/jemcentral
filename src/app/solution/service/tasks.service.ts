import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { BehaviorSubject, first, map, tap } from 'rxjs'
import { List } from '../model/list.model'
import { OFF, ON, OnOff } from '../model/on-off.type'
import { ITask, Tag, Task } from '../model/tasks.model'

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  list: BehaviorSubject<Task[]> = new BehaviorSubject<Task[]>([])
  tags: List<Tag> = new List<Tag>()

  selected: BehaviorSubject<Task | null> = new BehaviorSubject<Task | null>(null)
  onEdit: BehaviorSubject<Task | null> = new BehaviorSubject<Task | null>(null)

  createMode: OnOff = OFF

  constructor(private http: HttpClient) {
  }

  getTasks() {
    return this.http.get(`assets/mock/generated.json`)
      .pipe(
        first(),
        map(response => response as ITask[]),
        map(tasks => tasks.map(task => new Task(task.id, task.title, task.text, task.tags))),
        tap(tasks => tasks.forEach(task => this.tags.update(task.tags)))
      )
      .subscribe((tasks: Task[]) => this.list.next(tasks))
  }

  select(task: Task | null): Task | null {
    if (this.onEdit.value && this.selected.value) {
      return null
    }
    this.selected.next(task)
    this.createMode = OFF
    return task
  }

  deselect() {
    this.select(null)
  }

  delete(deleted: Task) {
    this.list.next([...this.list.value.filter(task => task.id !== deleted.id)])
    if (deleted.id === this.onEdit.value?.id) {
      this.onEdit.next(null)
    }
    if (deleted.id === this.selected.value?.id) {
      this.selected.next(null)
    }
  }

  edit(task: Task) {
    this.onEdit.next(task.clone())
    this.createMode = OFF
  }

  save(edited: Task | null) {
    if (edited) {
      this.list.next(this.list.value.map(task => edited.id === task.id ? edited : task))
      this.onEdit.next(null)
      // this.deselect()
    }
  }

  create() {
    const empty = new Task(Date.now().toString(), '', '', [])
    this.select(empty)
    this.onEdit.next(empty)
    this.createMode = ON
    this.list.next([...this.list.value, empty])
  }

  cancel() {
    this.onEdit.next(null)
    this.deselect()
  }

  createTask(task: ITask) {
    const {length} = this.list.value
    this.list
      .pipe(
        map((tasks: Task[]) => [...tasks, new Task(`${length}`, task.title, task.text, task.tags)])
      )
  }
}
