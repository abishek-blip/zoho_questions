var number = [10, 36, 54, 89, 12]
var weight = []
for(var i = 0; i < number.length; i++)
{
    var num = number[i]
    var sum = 0
    for(var j = 1; j < num; j++)
    {

        if(j * j == num)
        {
            sum += 5
            if(j * 4 == num && num % 6 == 0)
            {
                sum += 4
            }
            // break 
        }
        else if(j * 4 == num && num % 6 == 0)
        {
            sum += 4
        }
    }
    if(num % 2 == 0)
    {
        sum += 3
    }
    weight.push(sum)
}
for(var k = 0; k < weight.length; k++)
{
    for(var l = k + 1; l < weight.length; l++)
    {
        if(weight[k] > weight[l])
        {
            var temp1 = weight[k]
            weight[k] = weight[l]
            weight[l] = temp1

            var temp2 = number[k]
            number[k] = number[l]
            number[l] = temp2
        }
    }
    console.log("(",number[k],",",weight[k],")");
}