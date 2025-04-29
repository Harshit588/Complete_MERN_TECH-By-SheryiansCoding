let arr = [1, 2, 3, 4, 5, 6, 7, 8];

//+++++++++++++++++++ ARRAYS ++++++++++++++++++++

// forEach
arr.forEach((element) => {
  // console.log(element);
});

// map
let newArr1 = arr.map((element) => element + 100);
// console.log(newArr1);

// Filter
let newArr2 = arr.filter((element) => element > 4);
// console.log(newArr2);

// Find
let elementSearch = arr.find((num) => num === 10);
if (elementSearch === 3) {
  //   console.log("Number Found");
} else {
  //   console.log("Not Found");
}

// IndexOf
let indexOf5 = arr.indexOf(5);
if (indexOf5 != -1) console.log(indexOf5);
else console.log("Not Available");
