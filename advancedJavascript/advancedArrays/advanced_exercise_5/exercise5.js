// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"],
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"],
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"],
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"],
  },
];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
let newArray = [];
array.forEach((user) => {
  let { username } = user;
  username = username + "!";
  newArray.push(username);
});

//Create an array using map that has all the usernames with a "? to each of the usernames
const mapArray = array.map((user) => {
  let { username } = user;
  return username + "?";
});
//Filter the array to only include users who are on team: red
const filterArray = array.filter((user) => {
  let { team } = user;
  return team === "red";
});
//Find out the total score of all users using reduce
const total = array.reduce((acc, user) => {
  return acc + user.score;
}, 0);
// (1), what is the value of i?
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
  return num * 2;
});

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
const bonus = array.map((user) => {
  return (user.item = user.item.map((item) => {
    return user.item + "!";
  }));
  return user;
});
