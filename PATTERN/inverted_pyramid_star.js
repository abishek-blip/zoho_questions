var n = 3
for(i = 0; i < n; i++)
{
    var line = ''
    for(j = 0; j < 2*n-i-1; j ++)
    {
        if( j < i)
        {
            line = line + "  "
        }
        else
        {
            line = line + "* "
        }
    }
    console.log(line)
}