/**
 * Converter pattern (Adapter)
 */
export interface Converter<U, V> {
  fromSrc(src: U): V;
  fromDst(dst: V): U;
}
