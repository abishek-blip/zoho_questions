var mat1 = [[1,2],[3,4]]
var mat2 = [[1,3],[2,4]]
var result = [[0,0],[0,0]]

for( i = 0; i < 2; i ++ )
{
    for( j = 0; j < 2; j ++ )
    {
        for( k = 0; k < 2; k ++ )
        {
            result[i][j] = result[i][j] + mat1[i][k] * mat2[k][j]
        }
    }
}

for( l = 0; l < 2; l ++ )
{ 
    var line =''
    for( m = 0; m < 2; m ++ )
    {
        line = line + result[l][m] + " "
        
    }
    console.log(line);
}
    