const movies = ["Lilo and Stitch", "Hawaii 5-0", "Jurassic Park"];

// Store different types of elements
const elements = ["Hello", 7, { message: "Hi mom" }, true];

console.log(movies.length);
console.log(movies[1]);


//*****itterating Over An Array //

for (i=0; i < movies.length; i++)
    {
        console.log(movies[i]);
    }

// Second option for itteration   For-of //

let ofMoive;

for(ofMovie of movies)
    {
        console.log(ofMovie);
    }

    movies.forEach(myElement =>
        {
            console.log(`For Loop ${myElement}`);
        });

        //***** Adding to an Array */

        movies.push("Magnum PI");
        console.log(movies[movies.length -1]);

        // add to beginning of an array use unshift//
        movies.unshift("50 First Dates");
        console.log(movies[0]);
        console.log(movies);
        
        // Removing an element from the end of Array
        movies.pop();
        
        // place into a new variable
        let theEndElement = movies.pop();

        // splice (indext to start, number of elements to remove)

        movies.splice(1,2);