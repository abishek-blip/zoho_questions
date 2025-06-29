var dates = ["25,12,2022", "1,1,2020", "15,8,2021", "5,6,2020","31, 12, 2020", 
             "14, 2, 2023", "15, 8, 2020","2, 10, 2021", "1, 1, 2021"];

var result = [];

for (var i = 0; i < dates.length; i++) {
    var n = stringtodate(dates[i]);
    result.push(n);
}

function stringtodate(word) {
    var array = [];
    var temp = "";
    for (var j = 0; j < word.length; j++) {
        var ch = word[j];
        if (ch >= '0' && ch <= '9') {
            temp += ch;
        } else if (ch == ',') {
            array.push(temp);
            temp = "";
        } else {
            // ignore spaces or any other characters
            continue;
        }
    }
    if (temp !== "") {
        array.push(temp);
    }
    return array;
}

// Sorting the result based on year, month, day as numbers
for (var i = 0; i < result.length; i++) {
    for (var j = i + 1; j < result.length; j++) {
                                                                        //   var y1 = +result[i][2], m1 = +result[i][1], d1 = +result[i][0];
                                                                        //   var y2 = +result[j][2], m2 = +result[j][1], d2 = +result[j][0];
        var y1 = parseInt(result[i][2])
        var m1 = parseInt(result[i][1])
        var d1 = parseInt(result[i][0])
        var y2 = parseInt(result[j][2])
        var m2 = parseInt(result[j][1])
        var d2 = parseInt(result[j][0])
        if (
            y1 > y2 ||
            (y1 === y2 && m1 > m2) ||
            (y1 === y2 && m1 === m2 && d1 > d2)
        ) 
        {
            var temp = result[i];
            result[i] = result[j];
            result[j] = temp;
        }
    }
}

console.log(result);




//2


var dates = ["25,12,2022","1,1,2020","15,8,2021","5,6,2020","31, 12, 2020","14, 2, 2023","15, 8, 2020","2, 10, 2021","1, 1, 2021"]
var result = []
for(var i = 0; i < dates.length; i++)
{
    var n = stringtodate(dates[i])
    result.push(n)
}


function stringtodate(word)
{
    var dt = word
    var array = []
    var temp = ""
    for(var j = 0; j < dt.length; j++)
    {
        if(dt[j] >= "0" && dt[j] <= "9")
        {
            temp = temp + dt[j]
        }
        else if(dt[j] == "," || j == dt.length-1)
        {
            array.push(parseInt(temp))
            temp = ""
        }
    }
    if(temp != "" && temp!= " ")
    {
        array.push(parseInt(temp))
        temp = ""
    }
    return array
    // result.push(array)
}
console.log(result)


for(var i = 0; i < result.length; i++)
{
    for(var j = i + 1; j < result.length; j++)
    {
        if(result[i][2] > result[j][2])
        {
            var temp = result[i]
            result[i] = result[j]
            result[j] = temp
        }
        else if(result[i][2] == result[j][2])
        {
            if(result[i][1] > result[j][1])
            {
                var temp2 = result[i]
                result[i] = result[j]
                result[j] = temp2
            }
            else if(result[i][1] == result[j][1])
            {
                if(result[i][0] > result[j][0])
                {
                    var temp3 = result[i]
                    result[i] = result[j]
                    result[j] = temp3
                }
                else if(result[i][0] <= result[j][0])
                {
                    result[i] = result[i]
                    result[j] = result[j]
                }
            }
            else     
            {
                // result[i] = result[i]
                // result[j] = result[j]
            }
        }
        else
        {
            // result[i] = result[i]
            // result[j] = result[j]
        }
    }
}

console.log(result);



