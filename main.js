console.log("Bird website has loaded");
// logs are notes to programmers that we see in the console
let favoriteToday = "Great Blue Heron";
// use let to declare the variable when the value may change

favoriteToday = "Great Horned Owl";
// can re-assign the value
// a variable can be reassigned a value of any type

const permanentFav = "Great Blue Heron";
// use const when we don't want the value to change

console.log(
  "My favorite bird today is the",
  favoriteToday,
  "but my all time favorite is",
  permanentFav
);

let year = prompt("What year were you born in? ");
console.log("birth year:", year);

// from the birth year, tell the user what generation they are part of

// Generations Born Current Ages
// Millennials 1981 – 1996 27 – 42
// Gen X 1965 – 1980 43 – 58
// Boomers II (a/k/a Generation Jones)* 1955 – 1964 59 – 68
// Boomers I* 1946 – 1954 69 – 77

if (year >= 1965 && year <= 1980) {
  alert("When was your last colonoscopy?");
} else if (year >= 1981 && year <= 1996) {
  alert("How's your student loan debt?");
} else if (year >= 1996 && year <= 2010) {
  alert("Slay no cap on god full send fr fr");
}

value = prompt("Enter something");

if (value) {
  // if value is truthy (evaluates to true), the code in the {} will execute
  console.log("You entered", value);
} else {
  console.log("You didn't enter anything");
}

if (guess > number) {
  alert("Too high!");
} else if (guess < number) {
  alert("Too low!");
} else if (guess === number) {
  alert("You got it!");
} else {
  alert("What you guessed was not a number");
  // handle input that isn't a number
}

let number = 56;
// refactor this game
// keep playing until you guess right (while your guess is not right)
let guess;
// starting value of guess is undefined

while (guess !== number) {
  // as long as the guess is incorrect, keep asking for guesses
  guess = parseInt(prompt("Guess a whole number between 1 and 100"));
  // the prompt input is a string by default, and parseInt converts it to a number

  if (guess > number) {
    alert("Too high!");
  } else if (guess < number) {
    alert("Too low!");
  }
}
// when the guess is equal to the number, exit the loop and execute the next line
alert("You got it!");
