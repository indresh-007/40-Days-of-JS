/* (3). Array Iterator Methods in JavaScript */

// (i)- The filter() array method => The filter() method in JavaScript creates a new array containing only the elements that satisfy a condition defined in a callback function.
/*
1.Iterates over each element of the array
2.Includes elements when the callback returns true
3.Excludes elements when the callback returns false
*/

let customers = [
  {
    id: 1,
    f_name: "Abby",
    l_name: "Thomas",
    gender: "M",
    married: true,
    age: 32,
    expense: 500,
    purchased: ["Shampoo", "Toys", "Book"],
  },
  {
    id: 2,
    f_name: "Jerry",
    l_name: "Tom",
    gender: "M",
    married: true,
    age: 64,
    expense: 100,
    purchased: ["Stick", "Blade"],
  },
  {
    id: 3,
    f_name: "Dianna",
    l_name: "Cherry",
    gender: "F",
    married: true,
    age: 22,
    expense: 1500,
    purchased: ["Lipstik", "Nail Polish", "Bag", "Book"],
  },
  {
    id: 4,
    f_name: "Dev",
    l_name: "Currian",
    gender: "M",
    married: true,
    age: 8,
    expense: 90,
    purchased: ["Book"],
  },
  {
    id: 5,
    f_name: "Maria",
    l_name: "Gomes",
    gender: "F",
    married: false,
    age: 7,
    expense: 300,
    purchased: ["Toys"],
  },
];

// filter() - Get 'Senior Citizens' by Filtering out other customers

const seniorCustomers = customers.filter((customer) => {
  return customer.age >= 60;
});
console.log("Senior Customer list", seniorCustomers);

// (ii)- The map() array method => The map() method in JavaScript creates a new array by applying a callback function to each element of the original array.
/*
1.Iterates through every element of the array
2.Executes the callback function for each element
3.Stores the returned value in the new array
*/
const customersWithFullName = customers.map((customer) => {
  let title = "";

  if (customer.gender === "M") {
    title = "Mr.";
  } else if (customer.gender === "F" && customer.married) {
    title = "Mrs.";
  } else {
    title = "Miss";
  }

  customer["full_name"] = `${title} ${customer.f_name} ${customer.l_name}`;

  return customer;
});

console.log("Customer after adding fullname", customersWithFullName);

//(iii)- The reduce() array method => The reduce() in JavaScript is used to combine all elements of an array into a single value by applying a callback function to each element.
/*
1.Accumulator: stores the result after each iteration.
2.currentValue: the current element being processed.
3.currentIndex: index of the current element.
*/

// reduce() - The average age of the Customers who have purchased the Item, 'Book'.

/*
arr.reduce(
    reducer(
       accumulator,
       currentValue,
       index,
       array),
    initialValue);
A reducer function which is also called as callback function to be called on each element of the array.

const ret = function reducer(accumulator, currentValue, index, array) {
    do something with accumulator and currentvalue
    You get a result
    You return that result
}
*/

{
  const arr = [1, 2, 3, 4, 5];

  const result = arr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);

  console.log(result);
}

let count = 0;
const total = customers.reduce((accumulator, customer) => {
  if (customer.purchased.includes("Book")) {
    accumulator = accumulator + customer.age;
    count = count + 1;
  }
  return accumulator;
}, 0);

console.log("Customer Avg age Purchased Book:", Math.floor(total / count));

// (iv)- The reduceRight() array method -> To reduce from the right

let number = [100, 40, 15];

const subsResult = number.reduceRight((accumulator, current) => {
  return accumulator - current;
});

console.log("Subs", subsResult);

// (v)- The some() array method
/*
The some() method in JavaScript is used to determine whether at least one element in an array satisfies a specific condition. It returns a boolean value: true if a match is found, and false otherwise
*/

// some() - Do we have a Young Customer(age less than 10 years)?

const hasYoungCustomer = customers.some((customer) => {
  return customer.age < 10;
});

console.log("Has Young Customer(Age < 10):", hasYoungCustomer);

// (vi)- The every() array method
/*
The every() method in JavaScript tests whether all elements in an array pass a specific condition. It returns a Boolean value (true or false) based on the result of a testing function applied to each element.
*/

// every() - Every Customer is Married?

const isAllMarried = customers.every((customer) => {
  return customer.married;
});

console.log("All Customer Married?:", isAllMarried);

// (vii)- The find() array method
/*
The find() method in JavaScript returns the first element in an array that satisfies a provided testing function. If no element matches the condition, it returns undefined
*/

// find() - Find the youngest customer

const foundYoungCustomer = customers.find((customer) => {
  return customer.age < 10;
});

console.log("Found Young Customer(Age < 10): ", foundYoungCustomer);

// (viii)- The findIndex() array method
/*
The findIndex() method in JavaScript is used to find the index of the first element in an array that satisfies a specific condition.
*/
const youngCustomerIndex = customers.findIndex((customer) => {
  return customer.age < 10;
});

console.log("Found Young Customer Index: ", youngCustomerIndex);

// (ix)- The findLast() array method
/*
The JavaScript findLast() method is used to retrieve the last element in an array that meets a specified condition.
*/

const lastFoundYoungCustomer = customers.findLast((customer) => {
  return customer.age < 10;
});
console.log(
  "[find] Last Found Young Customer(Age < 10): ",
  lastFoundYoungCustomer,
);

/* Array method Chaining */

// Use Case: Get the total amount spent by Married Customers

// reduce()
// map()
// filter()

// Find all the married customers

const totalExpense = customers
  .filter((customer) => {
    return customer.married;
  })
  .map((marriedCustomer) => {
    return marriedCustomer.expense;
  })
  .reduce((accum, expense) => {
    return accum + expense;
  }, 0);

console.log("Total Expense of Married Customers in INR: ", totalExpense);


// forEach() -> 
/*
forEach() is an array method in JavaScript that allows you to iterate over each element of an array and run a function on every element. it returns undefined.
/*
✔ It is used when you want to perform an action for each item.
❌ It does NOT return a new array (unlike map).
*/

const arr = [1, 2, 3, 4, 5];

let sum = 0;
arr.forEach((elem) => {
  sum = sum + elem;
  //console.log(elem)
});
console.log("Sum using forEach", sum);

// entries() => The entries() method in JavaScript is used to create an iterator that returns key/value pairs for each index in the array. 
// It allows iterating over arrays and accessing both the index and value of each element sequentially.


const arrItr = arr.entries();

// console.log("Array Iterator", arrItr.next().value) // [0, 1]
// console.log("Array Iterator", arrItr.next().value) // [1, 2]


for (const [index, element] of arrItr) {
  console.log(index, element);
}

// values() => The values() method in JavaScript is used to create an iterator that returns value for each index in the array.
// It allows iterating over arrays and accessing value of each element sequentially.

const arrItr2 = arr.values();

for (const value of arrItr2) {
  console.log(value);
}

// flatMap()
/*
The JavaScript flatMap() method is a powerful array tool that combines two operations into one: it first maps each element using a callback function and then flattens the result into a new array by one level.
*/

const arr1 = [1, 2, 3, 4];

console.log(
  "simple map",
  arr1.map((item) => item * 2),
);
console.log(
  "simple flatmap",
  arr1.flatMap((item) => item * 2),
);

console.log(
  "complex map",
  arr1.map((item) => [item * 2]),
); //[[2], [4], [6],..]
console.log(
  "complex flat map",
  arr1.flatMap((item) => [item * 2]),
);

console.log(arr1.map((item) => [[item * 2]]));
console.log(arr1.flatMap((item) => [[item * 2]]));

