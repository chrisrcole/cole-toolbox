export function palindromeNumber(x: number): boolean {
  if (x < 0) {
    return false
  }

  const numberArray = Array.from(x.toString())
  const reversed: number = parseInt(numberArray.reverse().join(''))

  if (reversed === x) {
    return true
  } else {
    return false
  }
}

// if (x < 0) {
//   return false
// }

// if (x < 0 || (x % 10 === 0 && x !== 0)) {
//   return false
// }

// let reversed = 0

// while (x > reversed) {
//   // calc the last digit
//   const lastDigit = x % 10
//   // Take the previous last digit, and place it one tens place from the start
//   reversed = reversed * 10 + lastDigit
//   x = Math.floor(x / 10)
// }
// console.log('x', x)
// console.log('reversed', reversed)
// console.log('reversed/10', reversed / 10)
// return x === reversed || x === Math.floor(reversed / 10)
