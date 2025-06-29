var arr1 = [2,5,1,8]
var arr2 = [8,9,6]
var dup = []
var result = []
var carry = 0
if(arr1.length >= arr2.length)
{
    var n = arr1.length - arr2.length
    var temp = arr2
    var org = arr1
}
else
{
    var n = arr2.length - arr1.length
    var temp = arr1
    var org = arr2
}
for(var i = 0; i < n; i++)
{
    dup.push(0)
}
for(var j = 0; j < temp.length; j++)
{
    dup.push(temp[j])
}

for(var k = dup.length-1; k >= 0; k--)
{
    var add = dup[k] + org[k] + carry
    carry = parseInt(add/10)
    result.push(add%10)

}
if(carry > 0)
{
    result.push(carry)
}
console.log(arr1)
// console.log(arr2)
console.log(dup)
// console.log(result)
var final = ""
for(var p = result.length-1; p >= 0; p--)
{
    if(p != result.length-1)
    {
        final = final + ","
    }
    final =  final + result[p] 
}
console.log(final)


