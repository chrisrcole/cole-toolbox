export function reverseInteger(numberInput: number): number {
  const sign = Math.sign(numberInput)
  const numberArray = Array.from(numberInput.toString())
  const reversed = parseInt(numberArray.reverse().join('')) * sign
  console.log(reversed)
  if (reversed > Math.pow(2, 31) - 1 || reversed < -Math.pow(2, 31)) {
    return 0
  } else {
    return reversed
  }
}
