var database = [
  {
    username: "david",
    password: "password",
  },
  {
    username: "sally",
    password: "password",
  },
  {
    username: "andre",
    password: "password",
  },
];

var newsFeed = [
  {
    username: "david",
    timeline: "I love coding!!!",
  },
  {
    username: "Jane",
    timeline: "Javascript is so cool!!!!",
  },
  {
    username: "Juan",
    timeline: "Optimism pays off! You get what you give!",
  },
];

var usernamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What is your password?");

function isUserValid(username, password) {
  for (var i = 0; i < database.length; i++) {
    if (
      database[i].username === username &&
      database[i].password === password
    ) {
      return true;
    }
  }
  return false;
}

function signIn(username, password) {
  if (isUserValid(username, password)) {
    console.log(newsFeed);
  } else {
    alert("Sorry, wrong username/password combination");
  }

  // Basic functionality that checks first user of the database array
  //   if (user === database[0].username && pass === database[0].password) {
  //     console.log(newsFeed);
  //   } else {
  //     console.log("Sorry, wrong username or password");
  //   }
}

signIn(usernamePrompt, passwordPrompt);
