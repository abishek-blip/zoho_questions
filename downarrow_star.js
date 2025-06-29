n = 6
for(i = 0; i <= n; i ++)
{
    var line = ''
    for(j = -n; j <= n; j ++)
    {
        if( -(n -i) < j && j < (n -i))
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