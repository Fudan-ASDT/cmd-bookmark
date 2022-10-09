class MarkdownSyntaxError extends Error {
  constructor(public msg: string) {
    super(msg);
    Object.setPrototypeOf(this, MarkdownSyntaxError.prototype);
  }
}
