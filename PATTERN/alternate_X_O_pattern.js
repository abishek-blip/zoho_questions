var N = 5
var M = 6
var top = 0
var bottom = M - 1
var left = 0
var right = N - 1
var result = [];
for (var i = 0; i < M; i++) 
{
    result[i] = [];
    for (var j = 0; j < N; j++) 
    {
        result[i][j] = " ";
    }
}

var text = ""
while(top <= bottom && left <= right)
{
    if(top % 2 == 0)
    {
        text = "X"
    }
    else
    {
        text = "O"
    }
    for(var i = top; i <= right; i++)
    {
        result[top][i] = text + " " 
    }
    top++
    for(var j = top; j <= bottom; j++)
    {
        result[j][right] = text + " "
    }
    right--
    for(var k = right; k >= left; k--)
    {
        result[bottom][k] = text + " "  
    }
    bottom--
    for(var l = bottom; l >= top; l--)
    {
        result[l][left] = text + " "
    }
    left++
}
// console.log(result);
for(var p = 0; p < M; p++)
{
    var line = ''
    for(var r = 0; r < N; r++)
    {
        line = line + result[p][r]
    }
    console.log(line);
}