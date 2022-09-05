const { template } = require('@babel/core')

function getMaxLengthString(arrayOfString) {
  if (!(arrayOfString == null || arrayOfString == undefined))
  {
      newArr = []
    maxArr = []
    for (elem of arrayOfString) {
      newArr.push(elem.length)
    }
    max = Math.max.apply(Math, newArr)
    for (elem of arrayOfString) {
      if (elem.length == max)
      maxArr.push(elem)
    }
    return maxArr
  }

  return undefined
}
module.exports = getMaxLengthString
