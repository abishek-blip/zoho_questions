n = 6
for(i = 0; i <= n; i ++)
{
    var line = ''
    for(j = -n; j <= n; j ++)
    {
        if( -(i) < j && j < (i))
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