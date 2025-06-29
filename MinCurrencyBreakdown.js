var notes = [2000, 500, 200, 100, 50, 20, 10, 5, 1];
var cur = 2768;
var noteValues = [];   
var noteCounts = [];   

for (var i = 0; i < notes.length; i++) 
{
    var count = 0;
    while (cur >= notes[i]) 
    {
        cur -= notes[i];
        count++;
    }

    if (count > 0) 
    {
        noteValues.push(notes[i]);
        noteCounts.push(count);
    }
}

for (var j = 0; j < noteValues.length; j++) 
{
    console.log(noteValues[j] + ":", noteCounts[j]);
}
