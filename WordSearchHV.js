var arr =  [['a','z','o','l'],
            ['n','x','h','o'],
            ['v','y','i','v'],
            ['o','r','s','e']]
var dict = ['van','zoho','love','are','is']
for(var i = 0; i < dict.length; i++)
{
    var temp = dict[i]
    var res = checkmat(temp,arr)
    if(res == true)
    {
        console.log(dict[i])
    }
}
function checkmat(temp,arr)
{
    for(var i = 0; i < arr.length; i++)
    {
        for(var j = 0; j < arr.length; j++)
        {
            if(temp[0] == arr[i][j])
            {
                var found = true
                for(var k = j + 1; k < arr.length; k++)
                {
                    var right = 1
                    if(arr[i][k] == temp[right] && right < temp.length)
                    {
                        right++
                    }
                    else
                    {
                        found = false
                        break
                    }
                }
                if(found == true)
                {
                    return true
                }
                else
                {
                    found = true
                }
                for(var k = i+1; k < arr.length; k++)
                {
                    var bt = 1
                    if(arr[k][j] == temp[bt] && bt < temp.length)
                    {
                        bt++
                    }
                    else
                    {
                        found = false
                        break
                    }
                }
                if(found == true)
                {
                    return true
                }
                else
                {
                    return false
                }
            }
        }
    }
}





//2

var grid = [['a', 'z', 'o', 'l'],
            ['n', 'x', 'h', 'o'],
            ['v', 'y', 'i', 'v'],
            ['o', 'r', 's', 'e']]
var dictionary = ['van', 'zoho', 'love', 'are', 'is'];
findWords(grid, dictionary);

function findWords(grid, dictionary) 
{
  var numRows = grid.length;
  var numCols = grid[0].length;
  var foundWords = [];

 for (var d = 0; d < dictionary.length; d++) 
 {
    var word = dictionary[d];
    var wordLen = word.length;
    var found = false;

    for (var i = 0; i < numRows; i++) 
    {
        for (var j = 0; j < numCols; j++) 
        {
            if (j + wordLen <= numCols) 
            {
                var match = true;
                for (var k = 0; k < wordLen; k++) 
                {
                    if (grid[i][j + k] !== word[k]) 
                    {
                        match = false;
                        break;
                    }
                } 
                if (match) 
                {
                    foundWords.push(word);
                    found = true;
                    break;
                }
            }

            if (i + wordLen <= numRows) 
            {
                var match = true;
                for (var k = 0; k < wordLen; k++) 
                {
                    if (grid[i + k][j] !== word[k]) 
                    {
                        match = false;
                        break;
                    }
                }
                if (match) 
                {
                    foundWords.push(word);
                    found = true;
                    break;
                }
            }
        }
        if (found) break;
    }
  }

  for (var i = 0; i < foundWords.length; i++) 
{
    console.log(foundWords[i]);
  }
}
