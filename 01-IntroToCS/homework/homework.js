'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
   let decimalNumber = 0;
   const bitsCount = num.length;

   for(let i = 0; i < bitsCount; i++) {
    let position = bitsCount -1 - i;
    let base= 2**i;
    decimalNumber += num[position] * base;
   }
   return decimalNumber
}
console.log(BinarioADecimal("01101100"));

function DecimalABinario(num) {
  // tu codigo aca
  var restStack =[],
  rest,
  binaryString = ''
  while(num > 0){
    rest = Math.floor(num % 2)
    restStack.push(rest)
    num = Math.floor(num / 2)
  }
  while(restStack.length > 0){
    binaryString += restStack.pop().toString()
  }
  return binaryString
}
console.log(DecimalABinario(25))


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}