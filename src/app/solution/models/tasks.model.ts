export type Tag = string

export class Task {
  public tags: Tag[] = []

  constructor(public id: string,
              public title: string,
              public text: string,
              tags: Tag[] = []) {
    this.tags = tags
  }
}

export interface ITask {
  id: string
  title: string
  text: string
  tags: Tag[]
}
