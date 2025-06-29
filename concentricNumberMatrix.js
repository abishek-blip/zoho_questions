var N = 4
var len = (2*N)-1
var arr = []
for(var i = 0; i < len; i++)
{
    arr[i] = []
    for(var j = 0; j < len; j++)
    {
        arr[i][j] = 0
    }
}

var top = 0
var bottom = len - 1
var left = 0
var right = len - 1
var count = N
while(top <= bottom && left <= right)
{
    for(var i = top; i <= right; i++)
    {
        arr[top][i] = count
    }
    top++
    for(var j = top; j <= bottom; j++)
    {
        arr[j][right] = count
    }
    right--
    for(var k = right; k >= left; k--)
    {
        arr[bottom][k] = count
    }
    bottom--
    for(var l = bottom; l >= top; l--)
    {
        arr[l][left] = count
    }
    left++
    
    count--
}

for(var i = 0; i < len; i++)
{
    var line = ''
    for(var j = 0; j < len; j++)
    {
        line += arr[i][j] + ' '
    }
    console.log(line)
}
