var str = "geeksforgeeks"
for( i = 0; i < str.length; i ++ )
{
    var line = ''   
    for( j = 0; j < str.length; j ++ )
    {
        if( i == j || (i+j) == str.length-1 )
        {
            line = line + str[j] + " "
        }
        else
        {
            line = line + "  "
        }

    }
    console.log(line);
}