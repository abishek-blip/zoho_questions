var list1 = [1,3,4,5,6,8,9]
var list2 = [1,5,8,9,2]
var union = list1
var intersection = []
var except = []
for(var i = 0; i < list2.length; i++)
{
    var found = false
    for(var j = 0; j < union.length; j++)
    {
        if(list2[i] == union[j])
        {
            found = true
            break
        }
    }
    if(found == false)
    {
        union.push(list2[i])
    }
    else
    {
        intersection.push(list2[i])
    }
}

for(var k = 0; k < list1.length; k++)
{
    if(list1[k] % 2 != 0)
    {
        except.push(list1[k])
    }
}

for(var l = 0; l < list2.length; l++)
{
    if(list2[l] % 2 == 0)
    {
        except.push(list2[l])
    }
}

console.log("Union:", union);
console.log("Intersection:", intersection);
console.log("Except:", except);