var num = 51434
var sum = 0
var temp = 0
while(num > 0)
{
    temp = num % 10
    sum = sum + temp
    num = parseInt( num / 10)
}
console.log(sum)