/**
 * object implements Serializer would have serialze ability
 */
export interface Serializer<T> {
  serialize(): T
}

/**
 * object implements Appender would have ability to write md files
 */
export interface MdAppender<T> {
  output(s: Serializer<T>): void
}
