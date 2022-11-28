export type Tag = string


export class Task {
  public tags: Tag[] = []

  constructor(public id: string,
              public title: string,
              public text: string,
              tags: Tag[] = []) {
    this.tags = tags
  }

  clone() {
    const {id, title, text, tags} = this
    return new Task(id, title, text, tags)
  }
}

export interface ITask {
  id: string
  title: string
  text: string
  tags: Tag[]
}
