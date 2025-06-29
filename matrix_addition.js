var mat1 = [[1,2],[3,4]]
var mat2 = [[5,6],[7,8]]
var result = [[0,0],[0,0]]

for( i = 0; i < 2; i ++ )
{
    for( j = 0; j < 2; j ++ )
    {
        result[i][j] = mat1[i][j] + mat2[i][j]
    }
}

for( k = 0; k < 2; k ++ )
{ 
    var line =''
    for( l = 0; l < 2; l ++ )
    {
        line = line + result[k][l] + " "
        
    }
    console.log(line);
}
