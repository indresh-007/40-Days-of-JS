console.log("Day 15: JavaScript Array");

const mixedArray = [100, true, "tapaScript", {}];

// index = The position of an element in the array is known as its index.
// index starts with 0
// index end with length - 1

const salad = ["🍅", "🍄", "🥦", "🥒", "🌽", "🥕", "🥑"];

function Car(model) {
  this.model = model;
}

const bmwCar = new Car("BMW X1");
console.log(bmwCar);

const anotherSalad = new Array("🍅", "🍄", "🥦", "🥒", "🌽", "🥕", "🥑");

console.log("Salad", salad);
console.log("Another Salad", anotherSalad);

console.log(salad === anotherSalad);

const two = new Array(1, 2);
console.log(two); // [1, 2]

// const element = array[index]

console.log(salad[0]); // '🍅'
console.log(salad[2]); // '🥦'
console.log(salad[5]); // '🥕'

// const salad = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];

for (let i = 0; i <= salad.length - 1; i++) {
  console.log(`Element at index ${i} is ${salad[i]}`);
}

// push() - Add at the end
const ret = salad.push("🥜");
console.log(ret); // 8
console.log(salad);

// unshift() - Add at the start

const unRet = salad.unshift("🥜");
console.log(unRet); // 9
console.log(salad);

// pop - remove from end
console.log(salad);
const popRet = salad.pop();
console.log(popRet); // it return the removed element
console.log(salad);

// shift() - remove from start
console.log(salad);
const shiftRet = salad.shift();
console.log(shiftRet); // it also return the removed element
console.log(salad);

/* How to Copy and Clone an Array in JS? */

// slice() - copy an array or a part of it and it does not mutates the array. (extracts a portion of an array into a new one without changing the original)

// salad = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];
const saladCopy = salad.slice();
console.log("Salad Before Copy", salad);
console.log("Salad After Copy", saladCopy);
console.log(salad === saladCopy); // false

/* How to Determine if a Value is an Array in JS? */
// Deletermine if Array

Array.isArray(["🍅", "🍄", "🥦", "🥒", "🌽", "🥕", "🥑"]); // true;
Array.isArray("🍅"); // returns false
Array.isArray({ tomato: "🍅" }); // returns false
Array.isArray([]); // returns true

const arr = [1, 2, 3, 4];
Array.isArray(arr); // true

/* Array Destructuring in JavaScript */
// Array Destructuring

// without Destructuring
{
  const salad = ["🍅", "🍄", "🥦", "🥒", "🌽", "🥕", "🥑"];

  const tomato = salad[0];
  const mushroom = salad[1];
  const carrot = salad[5];
}

// with Destructuring
{
  const salad = ["🍅", "🍄", "🥦", "🥒", "🌽", "🥕", "🥑"];
  const [tomato, mushroom, carrot] = ["🍅", "🍄", "🥕"];
  console.log(tomato, mushroom, carrot);
}

{
  const [tomato, mushroom = "🍄"] = ["🍅"];

  console.log(tomato); // '🍅'
  console.log(mushroom); // '🍄'
}

{
  const [tomato, , carrot] = ["🍅", "🍄", "🥕"];

  console.log(tomato); // '🍅'
  console.log(carrot); // '🥕'
}

// Nested Array Destructuring

// [1 ,2, [4, [6, 8, ['q']]]]
{
  let fruits = ["🍈", "🍍", "🍌", "🍉", ["🍅", "🍄", "🥕"]];
  const veg = fruits[4]; // ['🍅', '🍄', '🥕']
  const carrot = veg[2]; // '🥕'

  fruits[4][2]; // '🥕'

  // let [,,,,[,,carrot]] = ['🍈', '🍍', '🍌', '🍉', ['🍅', '🍄', '🥕']];
}

// Rest and Spread
// ... Rest (Collect all remaining arguments into a single array variable.)
{
  const [tomato, mashroom, ...rest] = [
    "🍅",
    "🍄",
    "🥦",
    "🥒",
    "🌽",
    "🥕",
    "🥑",
  ];
  console.log(rest);

  // ... spread (copy or clone of an existing array or object -> shallow copy)
  const mySalad = ["🍅", "🍄", "🥦", "🥒", "🌽", "🥕", "🥑"];
  const mySaaladCopy = [...mySalad];

  console.log(mySaaladCopy); // ["🍅", "🍄", "🥦", "🥒", "🌽", "🥕", "🥑"]

  console.log(mySalad === mySaaladCopy); // false
}

// Swapping using destructuring
{
  let first = "😔";
  let second = "🙂";

  [first, second] = [second, first];

  console.log(first); // '🙂'
  console.log(second); // '😔'
}

// Merge arrays using ...(spread operator)

{
  const emotions = ["🙂", "😔"];
  const veggies = ["🥦", "🥒", "🌽", "🥕"];

  const emotionalVeggies = [...emotions, ...veggies];

  console.log(emotionalVeggies);
}

// length

{
  const arr1 = [11, 21, 73];
  const arr2 = new Array(7);

  console.log(arr1.length); // 3
  console.log(arr2.length); // 7

  // 2 ** 32 - 1 // 4294967295

  arr1.length = 9;
  console.log(arr1);
}

// concat()

{
  const first = [1, 2, 3];
  const second = [4, 5, 6];
  const third = [7, 8, 9];

  const merged = first.concat(second, third);
  console.log(merged);

  console.log(first); // [1, 2, 3]
  console.log(second); // [4, 5, 6]

  // array.concat(arr1, arr2,..,..,..,arrN);
}

// join()

{
  const emotions = ["🙂", "😍", "🙄", "😟"];

  const joined = emotions.join("<=>");
  console.log(joined);

  [].join(); // return ""
}

// fill()

{
  const colors = ["red", "blue", "green"];
  colors.fill("pink", 1, 3);
  console.log(colors);
}

// includes()

{
  const names = ["tom", "alex", "bob", "john"];

  console.log(names.includes("tom"));
  console.log(names.includes("july"));
}

// indexOf() and lastIndexOf()

{
  const names = ["tom", "alex", "bob", "tom"];

  console.log(names.indexOf("alex")); // 1
  console.log(names.indexOf("rob")); // -1

  console.log(names.indexOf("tom")); // 0
  console.log(names.lastIndexOf("tom")); // 3
}

// reverse()

{
  const names = ["tom", "alex", "bob"];
  console.log(names.reverse());
}

// sort()
// The default sort() method converts the element types into strings
//  The default sorting order is ascending.

{
  const names = ["tom", "alex", "bob"];
  console.log("After default sorting", names.sort());

  const artists = [
    "John White Abbott",
    "Leonardo da Vinci",
    "Charles Aubry",
    "Anna Atkins",
    "Barent Avercamp",
  ];

  console.log("Default sorting of artists array", artists.sort());

  artists.sort(function (a, b) {
    return a === b ? 0 : a > b ? -1 : 1;
  });

  console.log("Sort the artist names(Descending)", artists);

  let ages = [2, 1000, 10, 3, 23, 12, 30, 21];

  console.log(
    "age with default sorting",
    ages.sort(function (a, b) {
      return a === b ? 0 : a > b ? 1 : -1;
    }),
  );
}

// splice() => modifies the original array by removing, or replacing and adding elements.
{
  // splice(start, deleteCount, item, item1, item2)

  const names = ["tom", "alex", "bob"];

  // console.log(names.splice(0, 1, "john")); // ['tom']
  // console.log(names);

  // names.splice(1, 0, 'zack');
  // console.log(names);

  names.splice(2, 1, "zack");
  console.log(names);
}

// at() => at() is used to retrieve an element from an array using an integer index. it is especially useful for accessing elements from the end of an array because it supports negative indexing.
{
  const junkFoodILove = ["🥖", "🍔", "🍟", "🍕", "🌭", "🥪", "🌮", "🍿"];

  junkFoodILove.at(0); // '🥖'

  junkFoodILove.at(3); // '🍕'

  junkFoodILove.at(-1); // '🍿'

  junkFoodILove.at(-5); // '🍕'

  junkFoodILove.at(-8); // '🥖'

  junkFoodILove.at(10); // undefined
}

// copyWithin() => The copyWithin() method in JavaScript is a mutating method that copies a sequence of array elements from one part of an array to another position within the same array.
{
  // copyWithin(target, start, end)

  const array = [1, 2, 3, 4, 5, 6, 7];
  array.copyWithin(0, 3, 6);
  console.log(array); // [4, 5, 6, 4, 5, 6, 7];

  const array1 = [1, 2, 3, 4, 5, 6, 7];
  array1.copyWithin(0, 4);
  console.log(array1); //  [5, 6, 7, 4, 5, 6, 7]
}

// flat() => flat ()  method in JavaScript creates a new array by concatenating sub-array elements recursively up to a specified depth. It is a non-mutating (copying) method that does not change the original array
{
  const arr1 = [0, 1, 2, [3, 4]];
  console.log(arr1.flat());
  console.log(arr1);

  const arr2 = [0, 1, [2, [3, [4, 5]]]];
  console.log(arr2.flat(Infinity));
  console.log(arr2);
}

// grouping
{
  const employees = [
    { name: "Bob", dept: "Engineering", salary: 5000 },
    { name: "Alex", dept: "HR", salary: 3000 },
    { name: "Monu", dept: "Engineering", salary: 7000 },
    { name: "John", dept: "Engineering", salary: 1000 },
    { name: "Tom", dept: "Sales", salary: 6000 },
  ];

  const groupedByDet = Object.groupBy(employees, ({ dept }) => dept);
  console.log(groupedByDet);

  const groupedByMoreThan5000 = Object.groupBy(employees, ({ salary }) => {
    return salary >= 5000 ? "More than 5k" : "Less than 5k";
  });
  console.log(groupedByMoreThan5000);
}

/* Immutability */

//(i) toReversed() method -> it creates a new array with the elements in reverse order without modifying the original array.

{
  const items = [1, 2, 3];

  const reversedItems = items.toReversed();

  console.log(reversedItems);
  console.log(items);
}

//(ii) toSorted() -> returns a new array with elements sorted in ascending order, leaving the original array unchanged
{
  const months = ["Mar", "Jan", "Feb", "Dec"];
  const sortedMonths = months.toSorted();

  console.log(sortedMonths);
  console.log(months);
}

//(iii) toSpliced() ->  it allows you to remove, replace, or add elements in an array by returning a new array instead of modifying the original one.

// toSpliced(): Leaves the original array untouched and returns the entire modified array.

{
  const months = ["Jan", "Mar", "Apr", "May"];

  const months2 = months.toSpliced(1, 0, "Feb");

  console.log("Original Array", months);
  console.log("Spliced Array", months2);
}

// (iv)- with() -> it allows you to change the value of a specific index without mutating the original array. Instead of modifying the array in place, it returns a new array with the updated value.

{
  // with(index, value)
  const numbers = [1, 2, 3, 4, 5];

  // numbers[2] = 6;

  const newArray = numbers.with(2, 6);

  console.log(numbers); // Unchanged => [1, 2, 3, 4, 5];
  console.log(newArray); // Changed(A new copy) => [1, 2, 6, 4, 5];

  // numbers[-2] = 8 // undefined
  const anotherArray = numbers.with(-2, 8);
  console.log(numbers);
  console.log(anotherArray); // [1, 2, 3, 8, 5]
}

/*  Static Array Methods in JavaScript */

// (i)-   The Array-Like

{
  // {key: "value"} // object
  // [1,2,3] // array

  const arr_like = { 0: "I", 1: "am", 2: "array-like", length: 3 };

  console.log(arr_like);

  arr_like[2]; // 'array-like'
  arr_like.length; // 3

  console.log("is arr_like is an array?", Array.isArray(arr_like)); // false

  console.log("is arr_like is an object?", arr_like instanceof Object); // true

  function checkArgs() {
    console.log("Array Like Args", arguments);
    const argArr = [...arguments];
    console.log("Converetd Arary Args", argArr);
    argArr.forEach((elem) => {
      console.log(elem);
    });
  }

  checkArgs(1, 45);

  console.log(
    "HTML COllection as Array Like",
    document.getElementsByTagName("li"),
  );
  const collectionArr = Array.from(document.getElementsByTagName("li"));
  console.log("Converted Array", collectionArr);
}

// (ii)- The Array.fromAsync() -> The Array.    fromAsync() method is a static JavaScript utility that creates a new, shallow-copied array from an async iterable, iterable, or array-like object.

{
  const collectionPromise = Array.fromAsync(
    document.getElementsByTagName("li"),
  );
  console.log("Converted Array", collectionPromise);

  collectionPromise.then((value) => console.log(value));

  const ret = Array.fromAsync({
    0: Promise.resolve("Indresh Dwivedi"),
    1: Promise.resolve("Google"),
    2: Promise.resolve("Apple"),
    length: 3,
  }).then((value) => console.log(value));

  console.log(ret);
}

// (iii)-  The Array.of() ->

{
  const a = new Array(2, 3, 4); // [2,3,4]
  const b = [4, 5, 6]; // [4,5,6]

  const c = Array.of(2, true, "test", { name: "Alex" }, [1, 2, 3]);
  console.log("c", c);
}

