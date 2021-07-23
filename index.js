/*
  You may use the following animals array to test your functions inside of this file. This is the same array of animals that is used in the tests.
  
  To run this file, remember that you can run `node index.js` from the command line. You will need to be in the directory where the `index.js` file is kept for the above command to work.

  Finally, remember that in order for you to see output on the command line, you must log something out.
*/
const animals = [
  { kind: "Pig", count: 5 },
  { kind: "Cow", count: 7 },
  { kind: "Chicken", count: 11 },
  { kind: "Horse", count: 1 },
  { kind: "Dog", count: 2 },
  { kind: "Cat", count: 2 },
];

/**
 * FUNCTION DESCRIPTION
 * ------------------
 * Adds up the `count` key of each animal in the array and returns a total.
 * @param {Object[]} animals - An array of animal objects. See above for the shape of the object.
 * @returns {number} The total of all animal counts.
 *
 * EXAMPLE
 * ------------------
 * getTotalCount(animals); //> 28
 * getTotalCount([]); //> 0 // returns 0 if the input array is empty
 */
function getTotalCount(animals) {
// This function will add up the count key for every animal and return a total
// Create a variable and assign it to a number
let total = 0;
// Create a for of loop that loops through each animal 
for (const animal of animals) {
    // Hold they count of each animal
    //Add the count of all animals together 
    total += animal.count
}
// Return the variable that represents total
return total;

}

/**
 * FUNCTION DESCRIPTION
 * ------------------
 * Returns the `kind` for each object from the inputted array.
 * @param {Object[]} animals - An array of animal objects. See above for the shape of the object.
 * @returns {string[]} An array of strings, where each string is a kind of animal.
 *
 * EXAMPLE
 * ------------------
 * getAllKinds(animals); //> ["Pig", "Cow", "Chicken", "Horse", "Dog", "Cat"]
 * getAllKinds([]); //> [] // returns empty array if input array is empty
 */
function getAllKinds(animals) {
// This function will return the 'kind' KEY for each object 
// Create a variable that holds an empty array
let animalKind = [];
  // Create a for of loop that loops through each animal
  // Hold the kind of each animal 
  for (const animal of animals) {
  // Add animal kind into empty array
  animalKind.push(animal.kind);
}

    // Return the variable 
    return animalKind;


}

/**
 * FUNCTION DESCRIPTION
 * ------------------
 * Returns all objects inside the given array where the `count` of an animal is equal to or greater than the `minimum` amount.
 * @param {Object[]} animals - An array of animal objects. See above for the shape of the object.
 * @param {number} minimum - The lowest count of animals to include.
 * @returns {Object[]} An array of objects, which represents all animals that have a count equal to or greater than the minimum.
 *
 * EXAMPLE
 * ------------------
 * filterByCountMinimum(animals, 5); //> [
    { kind: "Pig", count: 5 },
    { kind: "Cow", count: 7 },
    { kind: "Chicken", count: 11 },
  ];
 * filterByCountMinimum([], 3); //> [] // returns empty array if input array is empty
 */
function filterByCountMinimum(animals, minimum) {
// This function returns all animal counts GREATER than the 'min' count
// Create a variable and assign to an empty array
let animalCount = [];
  // Create a for loop that loops through each animal 
  for (const animal of animals) {
    // Create an if statement to grab only animals counts greater than minimum 
    if (animal.count >= minimum) {
      // Add animal wiho have counts greater than the 'min' to empty array
      animalCount.push(animal);
    }
  }
    // Return variable 
      return animalCount;
      //console.log(animalCount);

}

/**
 * FUNCTION DESCRIPTION
 * ------------------
 * Returns the object with the highest `count`. If more than one object shares the same highest `count`, return the first one.
 * @param {Object[]} animals - An array of animal objects. See above for the shape of the object.
 * @returns {Object} The object which represents the animal with the highest count.
 *
 * EXAMPLE
 * ------------------
 * getMostCommonAnimal(animals); //> { kind: "Chicken", count: 11 }
 * getMostCommonAnimal([]); //> null // returns null if the input is empty
 */
function getMostCommonAnimal(animals) {
  // Function returns the animal/object with the highest count. If highest count is shared, return ONLY first animal/object
  // Create a variable and assign it an empty Object
  let newObj = {};
  let noCount = null;
  
  // Create a for of loop that loops through each animal
  for (const animal of animals) {
    // Find the highest count from all animals and hold value in variable
    let animalCount = Math.max(...animals.map(e => e.count));
    // Find the animal with highet count and hold in variable
    let highestCount = animals.find(animal => animal.count === animalCount);
    // Create an if statement to get the highest 'count' from animal 
    if (animal.count >= animalCount) {
      // return that animal
      newObj = highestCount
    }
      // if animals both share the same highest count, return only the first animal
      if (animal.count === animalCount) {
        // return only first animal
        newObj = highestCount;
        // if no input - no COUNT
      }  if (!animal) {
         return null;
      }  
    }
  
    // return variable
      return newObj;            
}

// Do not change anything below this line.
module.exports = {
  getTotalCount,
  getAllKinds,
  filterByCountMinimum,
  getMostCommonAnimal,
};
