var n = 3
for(i = 0; i < n; i++)
{
    var line = ''
    for(j = 0; j < n+i; j ++)
    {
        if( j < n-i-1)
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