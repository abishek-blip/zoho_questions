var str = "2\nmani 2 ram raj\nram 2 kumar kishore\n";
var word = "";
var array = [];
for (var i = 0; i < str.length; i++) {
    if (str[i] == '\n') {
        array.push(word);
        word = "";
    } else {
        word += str[i];
    }
}
console.log(array);

var dict = new Map();
for (var j = 1; j < array.length; j++) {
    var wd = "";
    var temp = [];
    for (var k = 0; k < array[j].length; k++) {
        var n = array[j][k];
        if (n != " " && !(n >= '0' && n <= '9')) {
            wd += n;
        } else if (n == " " && wd != "") {
            temp.push(wd);
            wd = "";
        }
    }
    // Push last word if any
    if (wd != "") {
        temp.push(wd);
    }

    console.log(temp);

    var key = temp[0];
    var values = [];
    for (var p = 1; p < temp.length; p++) {
        values.push(temp[p]);
    }
    dict.set(key, values);
}

console.log("Map:", dict);

console.log("Leaf Nodes:");
for (var [key, values] of dict) {
    for (var i = 0; i < values.length; i++) {
        if (!dict.has(values[i])) {
            console.log(values[i]);
        }
    }
}



/*
var str = "2\nmani 2 ram raj\nram 2 kumar kishore\n"
var word = ""
var array = []
for(var i = 0; i < str.length; i++)
{
    if(str[i] == '\n')
    {
        array.push(word)
        word = ""
    }
    else
    {
        word = word + str[i]
    }
}
console.log(array)

var dict = new Map()
for(var j = 1; j < array.length; j++)
{
    var wd = ""
    var temp = []
    for(var k = 0; k < array[j].length; k++)
    {
        var n = array[j][k]
        if(n != " " && !(n.charCodeAt(0) >= 48 && n.charCodeAt(0) <= 57))
        {
            wd = wd + n
        }
        else if(n == " " && wd != "")
        {
            temp.push(wd)
            wd = ""
        }
        if(k == array[j].length-1 && wd != "")
        {
            temp.push(wd)
            wd = ""
        }
    }
    if(wd != "")
    {
        temp.push(wd)
    }
    console.log(temp)
    
    var key = temp[0];
    var values = [];
    for (var p = 1; p < temp.length; p++) 
    {
        values.push(temp[p]);
    }
    dict.set(key,values)
}
console.log(dict)
for(var [key,values] of dict)
{
    var items = values
    for(var i = 0; i < items.length; i++)
    {
        if(!dict.has(items[i]))
        {
            console.log(items[i])
        }
    }
}

*/