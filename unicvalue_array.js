// var para = ["is", "the","is","the","this","and"]
// var unic = []
// var count = []
// for(i = 0; i < para.length; i ++)
// {
//     found = false
//     for(j = 0; j < unic.length; j ++)
//     {
//         if(para[i] == unic[j])
//         {
//             count[j] ++
//             found = true
//             break
//         }
//     }
//     if(found == false)
//     {
//         unic.push(para[i])
//         count.push(1)
//     }
// }

// for(k = 0; k < unic.length; k ++)
// {
//     console.log(unic[k], "---", count[k]);
// }


//Using Map

var str = ["is","the","is","and","The","was"]
var dict = new Map()
for(var i = 0; i < str.length; i++)
{
    if(!dict.has(str[i]))
    {
        dict.set(str[i],1) 
    }
    else
    {
        var search = dict.get(str[i])
        var n = search + 1
        dict.set(str[i],n)
    }
}
console.log(dict)

//Using Ternary Operator
var str = ["is", "the", "is", "and", "The", "was"];
var dict = new Map();

for (var i = 0; i < str.length; i++) 
{
    var s = dict.has(str[i]) ? dict.get(str[i]) + 1 : 1
    dict.set(str[i], s);
}

console.log(dict);
