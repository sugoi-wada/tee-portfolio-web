export function splitArray<T>(baseArray: T[], columns = 2): T[][] {
  return baseArray.reduce<T[][]>(
    (acc, cur, idx) => {
      const col = idx % columns
      acc[col].push(cur)
      return acc
    },
    [...Array(columns)].map(() => [])
  )
}
