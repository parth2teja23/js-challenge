// const myArr = [10, 20, 30, 40, 50];
// console.log(myArr);

const heroes = ["Batman", "Superman", "Wonder Woman", "Flash", "Green Arrow"];
// console.log(heroes);

// const newHeroes = heroes;
// newHeroes.push("Flash");

// console.log("After pushing Flash:");
// console.log("heroes:", heroes);
// console.log("newHeroes:", newHeroes);

// This is because both variables point to the same array in memory
// newHeroes is a shallow copy of heroes

// To create a true copy, we can use the spread operator
// const trueCopyHeroes = [...heroes];
// trueCopyHeroes.push("Aquaman");
// console.log("TrueCopyHeroes: ", trueCopyHeroes);

// ----- Array Methods -----
// console.log("Length of heroes array:", heroes.length);
// console.log("First hero:", heroes[0]);
// console.log("Last hero:", heroes[heroes.length - 1]);
// heroes.push("Cyborg");
// console.log("After pushing Cyborg:", heroes);
// heroes.pop();
// console.log("After popping last hero:", heroes);

// heroes.unshift("Green Lantern"); // Adds to the beginning of the array
// console.log("After unshifting Green Lantern:", heroes);
// heroes.shift(); // Removes the first element of the array
// console.log("After shifting first hero:", heroes);
// console.log(heroes.includes("Wolverine"));
// console.log(heroes.indexOf("Superman"));

// console.log(heroes.join(" - "));

// --- Slice and Splice ---

const myArr = [10, 20, 30, 40, 50, 60, 70, 80, 90];
const slicedArr = myArr.slice(2, 5); // from index 2 to index 5 (not inclusive)
console.log("Sliced Array:", slicedArr);

const splicedArr = myArr.splice(3, 4); // from index 3, remove 4 elements
console.log("Spliced Array (removed elements):", splicedArr);
console.log("Array after splicing:", myArr);
// Note: Splice modifies the original array. It removes elements from it which are no longer present.
