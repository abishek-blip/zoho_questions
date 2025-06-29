var str = "WELCOMETOZOHOCORPORATON"
var search = "TOO"
var mat = []
for(var i = 0; i < str.length; i++)
{
    if(i * i >= str.length)
    {
        var n = i
        break
    }
}
var temp = 0
for(var j = 0; j < n; j++)
{
    mat[j] = []
    for(var k = 0; k < n; k++)
    {
        if(temp < str.length)
        {
            mat[j][k] = str[temp]
            temp++
        }
        else
        {
            mat[j][k] = " " 
        }
    }
}
console.log(mat);

for(var l = 0; l < n; l++)
{
    for(var m = 0; m < n; m++)
    {
        if(search[0] == mat[l][m])
        {
            var start_index = "(" + l + "," + m + ")"
            // console.log("start_index = ",start_index1,start_index2);
            var h_count = 1
            for(var right = 1; right < search.length; right++)
            {
                if((m + right) < n && search[right] == mat[l][m + right] && h_count < search.length)
                {
                    h_count = h_count + 1
                    if(h_count == search.length)
                    {
                        var end_index = "(" + l + "," + (m + right) + ")"
                        console.log("start_index = ",start_index);
                        console.log("end_index = ",end_index);
                    }
                }
                else
                {
                    h_count = 0
                    break
                }
            }
            var v_count = 1
            for(var bt = 1; bt < search.length; bt++)
            {
                    // console.log(mat[l + bt][m],"--",(l+bt),m);
                if((l + bt) < n && search[bt] == mat[l + bt][m] && v_count < search.length)
                {
                    v_count = v_count + 1
                    if(v_count == search.length)
                    {
                        var end_index = "(" + (l + bt) + "," + m + ")"
                        console.log("start_index = ",start_index);
                        console.log("end_index = ",end_index);
                    }
                }
                else
                {
                    v_count = 0
                    break
                }
            }
        }
    }
}