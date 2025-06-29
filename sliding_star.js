var n = 4
for( i = 0; i < n; i ++ )
{
    var line = ''
    for( j = 0; j < i+n; j ++ )
    {
        if( j < i )
        {
            line = line + "  "
        }
        else
        {
            line = line + "* "
        }
    }
    console.log(line);
}