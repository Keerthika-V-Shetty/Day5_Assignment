//Write a program to take marks as input from the user and grade him accordingly. Use conditional statements. Also the same code using switch and ternary.

//using conditional statements

let marks = prompt("Enter your marks", 0);

if (marks < 35) {
  console.log("Grade C");
} else if (marks >= 35 && marks <= 75) {
  console.log("Grade B");
} else {
  console.log("Grade A");
}

//using ternary

let marks = prompt("Enter your marks", 0);

let grade =
  marks < 35 ? "Grade C" : marks >= 35 && marks <= 75 ? "Grade B" : "Grade A";
console.log(grade);

//using switch case

let marks = prompt("Enter your marks", 0);

switch (true) {
  case marks < 35:
    console.log("Grade C");
    break;
  case marks >= 35 && marks <= 75:
    console.log("Grade B");
    break;
  case marks > 75:
    console.log("Grade A");
    break;
}
