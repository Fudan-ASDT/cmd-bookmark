/**
 * object implements Serializer would have serialze ability
 */
export interface Serializer<T> {
  serialize(): T
}

/**
 * object implements Appender would have ability to send output to somewhere
 */
export interface Appender<T> {
  output(s: Serializer<T>): void
}
