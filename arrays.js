var pets = ["Chibi", "Sebastian", "Snickers", "Kupo"];
var ages = [14, 11, 3, 2];
var bool = [12<11, 11<2, 3>2, 2<14];

// Pop method: removes the last index of the array and returns only that index. In the variable pets this would return "Kupo".
var newPets = pets.pop();
console.log(newPets)

// Unshift method: adds and element to the array and returns the new total of indexes within that new array. In the case of variable ages it would return 5 after adding new new element.
var newAges = ages.unshift(1)
console.log(newAges);

// Slice method: this method take two numbers and removes indexes based on the numbers listed. In this case it will return indexes 1-3, which will be false, true, true. 
var newBool = bool.slice(1,4);
console.log(newBool);