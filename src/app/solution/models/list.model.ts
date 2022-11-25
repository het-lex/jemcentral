export class List<T> {
  list: Array<T> = []
  selected: Array<T> = []

  constructor(private items: Array<T> = []) {
    this.list = items
  }

  update(added: T[]) {
    this.list = [...new Set([...this.list, ...added])]
    return this.list
  }

  select(item: T) {
    const index = this.selected.indexOf(item)
    if (index !== -1) {
      this.deselect(index)
    } else {
      this.selected.push(item)
    }
    console.log(this.selected)
  }

  deselect(index: number) {
    this.selected.splice(index, 1)
  }
}

