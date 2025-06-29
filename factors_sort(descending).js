var array = [8,2,3,-12,16]
var fact_count = []
for(var i = 0; i < array.length; i++)
{
    var num = array[i]
    var count = 0
    if(num == 0)
    {
        count = 0
    }
    else
    {
        if(num < 0)
        {
            num = -num 
        }
        for(var j = 1; j <= num; j++)
        {
            if(num % j == 0)
            {
                count++
            }
        }
        
    }
    fact_count.push(count)
}

for(var l = 0; l < fact_count.length; l++)
{
    for(var m = l + 1; m < fact_count.length; m++)
    {
        if(fact_count[l] < fact_count[m])
        {
            var temp1 = fact_count[l]
            fact_count[l] = fact_count[m]
            fact_count[m] = temp1

            var temp2 = array[l]
            array[l] = array[m]
            array[m] = temp2
        }
    }
}
console.log(array);
console.log(fact_count)