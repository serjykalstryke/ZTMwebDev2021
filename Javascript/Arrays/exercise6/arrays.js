var array = ["Banana", "Apples", "Oranges", "Blueberries"];

//Bumps first item off list, in this case Banana
array.shift();

//Adds Kiwi to list
array.push("Kiwi");

//Removes Apples
array.splice(0, 1);

//Reverse sort array
array.reverse();

var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];

//accessing Oranges

array2[1][1][0];
