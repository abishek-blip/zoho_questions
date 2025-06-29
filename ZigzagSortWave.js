var num = [1,2,4,3,6,5,7]
for(var i = 0; i < num.length; i++)
{
    for(var j = i + 1; j < num.length; j++)
    {
        if(num[i] < num[j])
        {
            var temp = num[i]
            num[i] = num[j]
            num[j] = temp
        }
    }
}
var result = [];
var left = 0;
var right = num.length - 1;

while (left <= right) 
{
    if (left == right) 
    {
        result.push(num[left]);
    } 
    else 
    {
        result.push(num[left]);
        result.push(num[right]);
    }
    left++;
    right--;
}
console.log(result)