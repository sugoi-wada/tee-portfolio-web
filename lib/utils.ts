export function splitArray<T>(baseArray: T[], columns = 2): T[][] {
  return baseArray.reduce<T[][]>(
    (acc, cur, idx) => {
      const col = idx % columns
      acc[col]?.push(cur)
      return acc
    },
    [...Array(columns)].map(() => [])
  )
}

export function omit<T extends object, K extends keyof T>(
  obj: T,
  paths: K[]
): Omit<T, K> {
  return {
    ...paths.reduce(
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      (mem, key) => ((k: K, { [k]: _, ...rest }) => rest)(key, mem),
      obj as object
    ),
  } as Omit<T, K>
}

export function pick<T extends object, K extends keyof T>(
  obj: T,
  paths: K[]
): Pick<T, K> {
  return {
    ...paths.reduce(
      (mem, key) =>
        key in obj
          ? {
              [key]: obj[key],
              ...mem,
            }
          : mem,
      {}
    ),
  } as Pick<T, K>
}
