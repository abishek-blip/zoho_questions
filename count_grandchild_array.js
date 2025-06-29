var family = [["luke","shaw"],["wayne","rooney"],["rooney","ronaldo"],["shaw","rooney"]];
var search = "ronaldo";
var result = 0;
var dict = new Map();

for (var i = 0; i < family.length; i++) 
{
    var child = family[i][0];
    var parent = family[i][1];

    if (!dict.has(parent)) 
    {
        dict.set(parent, [child]); // start array
    } 
    else 
    {
        var children = dict.get(parent);
        children.push(child); // append child
    }
}
console.log(dict);
if (dict.has(search)) 
{
    var children = dict.get(search); 

    for (var i = 0; i < children.length; i++) 
    {
        var child = children[i];

        if (dict.has(child)) 
        {
            result += dict.get(child).length; 
        }
    }
}
console.log(result);