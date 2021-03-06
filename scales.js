const cMajor = ["C", "D", "em", "F", "G", "am", "bdim"]; // array of chords in a scale

const scales = {
    c: {
        major: ["C", "D", "Em", "F", "G", "Am", "Bdim"],
        minor: ["Cmin", "Ddim", "Eb", "Fmin", "Gmin", "Ab", "Bb" ]
    },

    'c#': {
        major: ['C#', 'D#', 'Fmin', 'F#', 'G#', 'A#min', 'Cdim'],
        minor: ['C#', 'D#dim', 'E', 'F#min', 'G#min', 'A', 'B']
    },

    d: {
        major: ['D', 'E', 'F#min', 'G', 'A', 'Bmin', 'Cdim'],
        minor: ['Dmin', 'Edim', 'F', 'Gmin', 'Amin', 'B', 'C']
    },

    'd#': {
        major: ['D#', 'F', 'Gmin', 'G#', 'A#', 'Cmin', 'Ddim'],
        minor: ['D#min', 'Fdim', 'F#', 'G#min', 'A#min', 'B', 'C#']
    },

    e: {
        major: ['E', 'F#', 'G#min', 'A', 'B', 'C#min', 'D#dim'],
        minor: ['Emin', 'F#dim', 'G', 'Amin', 'Bmin', 'C', 'D']
    },

    f: {
        major: ['F', 'G', 'Am', 'A#', 'C', 'Dmin', 'Edim'],
        minor: ['Fmin', 'Gdim', 'G#', 'A#min', 'Cmin', 'C#', 'D#']
    },

    'f#': {
        major: ['F#', 'G#', 'A#min', 'B', 'C#', 'D#min', 'Fdim'],
        minor: ['F#min', 'G#dim', 'A', 'Bmin', 'C#min', 'D', 'E']
    },

    g: {
        major: ['G', 'A', 'Bmin', 'C', 'D', 'Emin', 'F#dim'],
        minor: ['Gmin', 'Adim', 'A#', 'Cmin', 'Dmin', 'D#', 'F']
    },

    'g#': {
        major: ['G#', 'A#', 'Cmin', 'C#', 'D#', 'Fmin', 'Gdim'],
        minor: ['G#min', 'A#dim', 'B', 'C#min', 'D#min', 'E', 'F#']
    },

    a: {
        major: ['A', 'B', 'C#min', 'D', 'E', 'F#min', 'G#dim'],
        minor: ['Amin', 'Bdim', 'C', 'Dmin', 'Emin', 'F', 'G']
    },

    'a#': {
        major: ['A#', 'C', 'Dmin', 'D#', 'F', 'Gmin', 'Adim'],
        minor: ['A#min', 'Cdim', 'C#', 'D#min', 'Fmin', 'F#', 'G#']
    },

    b: {
        major: ['B', 'C#', 'D#min', 'E', 'F#', 'G#min', 'A#dim'],
        minor: ['Bmin', 'C#dim', 'D', 'Emin', 'F#min', 'G', 'A']
    }
}

const progressions = [
    [1, 1, 4, 5], 
    [1, 4, 6, 5],
    [1, 5, 6, 4],
    [1, 6, 2, 5],
    [1, 6, 4, 5],
    [1, 2, 5, 5],
    [1, 4, 5, 5],
    [2, 5, 1, 1],
    [1, 6, 3, 7],
    [1, 4, 5, 1],
    [6, 7, 1, 1],
    [1, 7, 6, 7],
    [1, 6, 2, 5],
    [1, 3, 4, 5],
    [1, 4, 1, 5],
    [1, 4, 2, 5]
] // array of chord progressions.


function generator (array) {
    let newProgression = []; 
    let lastNumber = 0; //this is to store last random number so that there wont be immediate repeats
    let randomNumber = Math.random() * progressions.length; //this is the random number
    let progressionArray = [];

    function randomArray () {
    
        if (randomNumber != lastNumber) {
            progressionArray = progressions[Math.floor(randomNumber)]; 
            lastNumber = randomNumber; 
        } else {
             randomArray();
         }
    }

    randomArray();
    //this loads up the chord progression by creating a random integer 
    //then using that integer to call the chord progression from the progressions array
    //the conditional statement is used to make sure that the random number doesn't show up twice

    for (let i = 0; i < progressionArray.length; i++) {
        newProgression.push(array[progressionArray[i] - 1]);
    }

    //for loop that cycles through the chord progression array and prints each chord to a new array
    // I had to subtract 1 from the chord number to make it pull the right chord
    
    return newProgression;
   

}

// console.log(generator(scales['c']['major']));  ---- used to test function

function generate () {

    //function that runs when the button clicks it basically finds the key and scale that the user puts in
    //then inserts them into the previous function
    //in theory this could be part of the original function but I'm going to leave it like this for now

    var key = document.getElementById("key").value; //finding key
    var scale = document.getElementById("scale").value; //finding scale

    var generatedProgression = generator(scales[key][scale]); //creating a variable that runs the function with the user input

    for (let i=1; i < 5; i++) {

        document.getElementById("chord" + i).innerHTML = generatedProgression.shift(); 
        
        //for loop to take the first item in array and push it to correct html div
        //only loops 4 times at the moment, moving forward I want to figure out how to make a variable for longer or shorter chord progressions
    }  
     
    
    // console.log(generatedProgression); ----used to test function
}



// a chord progression generator

//things to look into

// how to make the generator not repeat itself;


//create an object with the progressions, that can use tags like 'happy' etc. 
//look into for in so you can loop through object the same way

//jquery val
//when the generate button is clicked, I take the value from key 
//and the value from scale then insert them into my function
//from there I have to figure out how to return them
//I guess I can start with the console?