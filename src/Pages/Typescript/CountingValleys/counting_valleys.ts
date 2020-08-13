export function countingValleys(s: string) {
  const n = s.split('').length
  const map: string[][] = new Array(n + 2)
    .fill(' ')
    .map(() => new Array(n + 2).fill(' '))
  map[0][0] = '_'
  map[0][n + 1] = '_'
  let dir = 0
  let right = 1
  let prev = '0'
  let valley = 0
  let num_valley = 0
  let step: string
  for (step in s.split('')) {
    if (s[step] === 'U' && s[step] === prev) {
      dir -= 1
    } else if (s[step] === 'D' && s[step] === prev) {
      dir += 1
    }
    if (s[step] === 'D' && parseInt(step) === 0) {
      dir += 1
    }

    if (s[step] === 'U') {
      //valley check
      valley += 1
      try {
        map[dir][right] = '/'
        right += 1
      } catch (error) {
        map.unshift(new Array(n + 2).fill(' '))
        map[dir][right] = '/'
        right += 1
      }
    } else {
      //valley check
      valley -= 1

      map[dir][right] = '\\'
      right += 1
    }

    prev = s[step]
    if (valley === 0 && s[step] === 'U') {
      num_valley += 1
    }
  }
  const prettyMap = []
  for (let index = 0; index < map.length; index++) {
    prettyMap.push(map[index].join(''))
    prettyMap.push('\n')
  }

  const output = [num_valley, prettyMap.join('')]

  return output
}
