var arr = [5,8,10,13,6,2]
var t = 3
var count = 0
for(var i = 0; i < arr.length; i++)
{
    var n = arr[i]
    var res = []
    var quo = parseInt(n/t)
    var mod = n%t
    var indcount = 0
    while(quo > 0)
    {
        res.push(t)
        quo--
    }
    if(mod != 0)
    {
         res.push(mod)
    }
    // console.log(res);
    indcount = res.length
    // console.log(indcount);
    count = count + indcount
    console.log(n,"---",res,"---",indcount);
}
console.log("Total Count:",count);