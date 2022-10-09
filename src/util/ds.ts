export class Stack<T> {
  constructor(public content: T[]) {}

  push(elem: T) {
    this.content.push(elem);
  }

  pop(): T | undefined {
    return this.content.pop();
  }

  top(): T | undefined {
    if (!this.content) {
      return undefined
    }
    return this.content[this.content.length - 1];
  }

  public get length() : number { return this.content.length; }

  get(i: number): T {
    return this.content[i];
  }
}
