export interface HashTable<T> {
  [key: number]: T
}

export function twoSum(nums: number[], target: number): number[] {
  const numObject: HashTable<number> = {}
  for (let i = 0; i < nums.length; i++) {
    const thisNum = nums[i]
    numObject[thisNum] = i
  }
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i]
    if (numObject.hasOwnProperty(diff) && numObject[diff] !== i) {
      return [i, numObject[diff]]
    }
  }
  return [0, 0]
}
