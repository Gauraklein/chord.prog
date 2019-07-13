
const cMajor = ["C", "D", "em", "F", "G", "am", "bdim"]; // array of chords in a scale

const progressions = [[1, 1, 4, 5], [1, 4, 6, 5]] // array of chord progressions.


function generator (array) {
    let newProgression = []; 
    
    //this will be the resulting progression
    
    let progressionArray = progressions[Math.floor(Math.random() * progressions.length)]; 

    //this loads up the chord progression by creating a random integer 
    //then using that integer to call the chord progression from the progressions array

    for (let i = 0; i < progressionArray.length; i++) {
        newProgression.push(array[progressionArray[i] - 1]);
    }

    //for loop that cycles through the chord progression array and prints each chord to a new array
    // I had to subtract 1 from the chord number to make it pull the right chord
    
    return newProgression;

}

console.log(generator(cMajor));


// a chord progression generator

//things to look into

// how to make the generator not repeat itself;
// should I store the chords in an array or an object?