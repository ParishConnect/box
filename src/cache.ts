export type CacheValue = string | number | boolean | object
let cache = new Map<string, CacheValue>()

export function get(
  property: string,
  value: CacheValue
): CacheValue | undefined {
  return cache.get(property + value)
}

export function set(
  property: string,
  value: CacheValue,
  className: string
): void {
  if (process.env.NODE_ENV !== 'production') {
    const valueType = typeof value
    if (
      valueType !== 'boolean' &&
      valueType !== 'number' &&
      valueType !== 'string'
    ) {
      const encodedValue = JSON.stringify(value)
      throw new TypeError(
        `al- aluminum-box: invalid cache value “${encodedValue}”. Only booleans, numbers and strings are supported.`
      )
    }
  }

  cache.set(property + value, className)
}

export function entries(): [string, CacheValue][] {
  return [...cache]
}

type CacheEntry = [string, CacheValue]
export function hydrate(newEntries: CacheEntry[]): void {
  cache = new Map<string, CacheValue>([...cache, ...newEntries])
}

export function clear(): void {
  cache.clear()
}
