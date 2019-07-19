/******************************* 
* Variables and data types
*/
/*
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);

// Variable naming rules
var _3years = 3;
var johnMark = 'John and Mark';
var if = 23;
*/


/**********************************
 *  Variable mutation and type coercion 
 */
/*
var firstName = 'John';
var age = 28;

console.log(firstName + ' ' + age);

var job, isMarried;
job = 'Teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job +
'. Is he married? ' + isMarried);

// Variable mutation
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + job +
'. Is he married? ' + isMarried);
var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);
*/




/*************************************
 * Basic operators
 */
/*
var now, yearJohn, yearMark;
now = 2018;
ageJohn = 28;
ageMark = 33;

//Math operators
yearJohn = now - 28;
yearMark = now - 33;

console.log(yearJohn);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);


// Logical operators
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);


// typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than John');
var x;
console.log(typeof x); 
*/



/****************************************
 * Operator precedence 
 */
/*
var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

// Multiple operators
var isFullAge = now - yearJohn >= fullAge; //true
console.log(isFullAge);

// Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

// Multiple assignments 
var x, y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6  // 32 - 6 // 26
console.log(x, y);


// More operators
x *= 2;
console.log(x);
x += 10;
console.log(x);
x--;
console.log(x);
*/



/*******************************************
 * CODING CHALLENGE 1 
 */

/*
Mark and John are trying to compare their BMI (Body 
Mass Index), which is calculated using the formula:
BMI = mass / height^2 = mass / (height * height).
(mass in kg and height in meter).

1. Store Mark's and John's mass and height in 
variables
2. Calculate both their BMIs
3. Create a boolean varaible containing information
about whether Mark has a higher BMI than John.
4. Print a string to the console containing the 
variable from step 3. (Something like "Is Mark's BMI
higher than John's? true").

GOOD LUCK 
*/
/*
var markHeight, johnHeight, markMass, johnMass;
markHeight = 1.8;
johnHeight = 1.9;
markMass = 68;
johnMass = 82;

var markBMI, johnBMI;
markBMI = markMass / (markHeight * markHeight);
johnBMI = johnMass / (johnHeight * johnHeight);

var johnIsBigger = johnBMI > markBMI;

console.log("Is John's BMI higher than Mark's? " + johnIsBigger);
*/

/**************************************************************
 *  If / else statements
 */
/*
 var firstName = 'John';
 var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}

var isMarried = true;
if (isMarried) {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}

var markHeight, johnHeight, markMass, johnMass;
markHeight = 1.8;
johnHeight = 1.9;
markMass = 92;
johnMass = 82;

var markBMI, johnBMI;
markBMI = markMass / (markHeight * markHeight);
johnBMI = johnMass / (johnHeight * johnHeight);

//var johnIsBigger = johnBMI > markBMI;

if (johnBMI > markBMI) {
    console.log('John\'s BMI is higher than Mark\'s.');
} else {
    console.log('Mark\'s BMI is higher than John\'s.')
}

//console.log("Is John's BMI higher than Mark's? " + johnIsBigger);
*/

/************************************************************
 *  Boolean logic
 */
/*
 var firstName = 'John';
 var age = 20;

 if (age < 13) {
    console.log(firstName + ' is a boy');
 } else if (age >= 13 && age < 20) { // Between 13 and 20
    console.log(firstName + ' is a teenager.');
 } else if (age >= 20 && age < 30) {
     console.log(firstName + ' is a young man.');
 } else {
     console.log(firstName + ' is a man.');
 }
*/

/***************************************************************
 *  The Ternary Operator and Switch Statements
 */
/*
 var firstName = 'John';
 var age = 30;

 // Ternary operator
 age >= 18 ? console.log(firstName + ' drinks beer.')
 : console.log(firstName + ' drinks juice.');

 var drink = age >= 18 ? 'beer' : 'juice';
 console.log(drink);

 /*if (age >= 18) {
     var drink = 'beer';
 } else {
     var drink = 'juice';
 }*/
/*
 // Switch statement
 var job = 'cop';
 switch (job) {
     case 'teacher':
         console.log(firstName + ' teaches kids how to code.');
         break;
     case 'drive':
         console.log(firstName + ' drives an uber in Lisbon.');
         break;
     case 'designer':
         console.log(firstName + ' designs beautiful websites.');
         break;
     default:
         console.log(firstName + ' does something else.');

 }

 switch (true) {
     case age < 13: 
        console.log(firstName + ' is a boy');
        break;
     case age >= 13 && age < 20:
         console.log(firstName + ' is a teenager.');
         break;
     case age >= 20 && age < 30:
         console.log(firstName + ' is a young man.');
         break;
     default:
         console.log(firstName + ' is a man.');
 }
*/

/******************************************************************
 *  Truthy and Falsy values and equality operators
 */

 // falsy values: undefined, null, 0, ' ', Nan
 // truthy values: NOT falsy values
/*
 var height = 0;

 height = 23;

 if (height || height === 0) {
     console.log('Variable is defined');
 } else {
     console.log('Variable has NOT been defined');
 }

 // Equality operators 
 if (height == '23') {
     console.log('The === operator does type correction!');
 }
*/
/**********************************************************
 *  CODING CHALLENGE 2
 */

/*
John and Mike both play basketball in different 
teams. In the latest 3 games, John's team scored 89,
120 and 103 points, while Mike's team scored 116, 94
and 123 points.

1. Calculate the average score for each team.
2. Decide which team wins in average (highest 
average score), and print the winner to the console.
Also include the average score in the output.
3. Then change the scores to show different winners.
Don't forget to take into account there might be a 
draw (same average score).

4. EXTRA: Mary also plays basketball, and her team
scored 97, 134 and 105 points. Like before, log the 
average winner to the console. HINT: you will need 
the && operator to take the decision. If you can't 
solve this one, just watch the solution, it's no
problem :)
5. Like before, change the scores to generate
different winners, keeping in mind there might be
draws.

GOOD LUCK
*/
/*
var johnScore1, johnScore2, johnScore3;
var mikeScore1, mikeScore2, mikeScore3;
var maryScore1, maryScore2, maryScore3;

johnScore1 = 89;
johnScore2 = 120;
johnScore3 = 103;

mikeScore1 = 89;
mikeScore2 = 120;
mikeScore3 = 103;

maryScore1 = 89;
maryScore2 = 120;
maryScore3 = 103;

var johnAverage = (johnScore1 + johnScore2 + johnScore3) / 3;
var mikeAverage = (mikeScore1 + mikeScore2 + mikeScore3) / 3;
var maryAverage = (maryScore1 + maryScore2 + maryScore3) / 3;

if (johnAverage > mikeAverage) {
    console.log('John\'s team scores higher than Mike\'s team on average'
    + ' with an average score of ' + johnAverage);
}
else if (johnAverage < mikeAverage) {
    console.log('Mike\'s team scores higher than John\'s team on average'
    + ' with an average score of ' + mikeAverage);
}
else {
    console.log('Both teams score the same on average'
    + ' with an average score of ' + johnAverage);
}

if (johnAverage > (mikeAverage && maryAverage)) {
    console.log('John\'s team scored the highest on average'
    + ' with an average score of ' + johnAverage);
}
else if (mikeAverage > (johnAverage && maryAverage)) {
    console.log('Mike\'s team scored the highest on average'
    + ' with an average score of ' + mikeAverage);
}
else if (maryAverage > (johnAverage && mikeAverage)) {
    console.log('Mary\'s team scored the highest on average'
    + ' with an average score of ' + maryAverage);
}
else {
    console.log('All teams scored the same on average'
    + ' with an average score of ' + johnAverage);
}
*/

/*******************************************************
 * Functions
 */
/*
function calculateAge(birthYear) {
    return 2018 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);

console.log(ageJohn, ageMike, ageJane);

function yearsUntilRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;

    if (retirement > 0){
    console.log(firstName + ' retires in ' + retirement 
    + ' years.');
    }
    else {
        console.log(firstName + ' is already retired.');
    }
}

yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1948, 'Mike');
yearsUntilRetirement(1969, 'Jane');
*/

/******************************************************
 *  Function Statements and Expressions
 */

 // Function declaration
 // function whatDoYouDo(job, firstName) {}
/*
 // Function expression
 var whatDoYouDo = function(job, firstName) {
    switch(job) {
        case 'teacher':
            return firstName + ' teaches kids how to code.';
        case 'driver':
            return firstName + ' drives a cab in Lisbon.';
        case 'designer':
            return firstName + ' designs beautiful websites.';
        default:
            return firstName + ' does something else.';
    }
 }

console.log(whatDoYouDo('teacher', 'John'))
console.log(whatDoYouDo('designer', 'Jane'))
console.log(whatDoYouDo('retired', 'Mark'))
*/

/*****************************************************************
 *  Arrays
 */
*/
 // Initialize new array
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names[2]);
console.log(names.length);

// Mutate array data
names[1] = 'Ben';
names[names.length] = 'Mary';
console.log(names);

// Different data types
var john = ['John', 'Smith', 1990, 'designer', false];

john.push('blue');
john.unshift('Mr.');
console.log(john);

john.pop();
john.pop();
john.shift();
console.log(john);

console.log(john.indexOf(23));

var isDesigner = john.indexOf('designer') === -1 ? 
'John is NOT a designer' : 'John IS a designer';
console.log(isDesigner);
*/

/*****************************************************************
 *  CODING CHALLENGE 2
 */

 /*
 John and his family went on a holiday and went to 3
 different restaurants. The bills were $124, $48 and
 $268.

 To tip the waiter a fair amount, John created a 
 simple tip calculator (as a function). He likes to 
 tip 20% of the bill when the bill is less than $50,
 15% when the bill is between $50 and $200, and 10%
 if the bill is more than $200.

 In the end, John would like to have 2 arrays:
 1) Containing all three tips (one for each bill)
 2) Containing all three final paid amounts (bills +
 tips).

 (NOTE: To calculate 20% of a value, simply multiply 
 if with 20/100 = 0.2)

 GOOD LUCK
 */

 function tipCalculator(cost) {
    var percentage;

    switch (true) {
        
         case cost < 50:
             percentage = .2;
             break;
         
         case cost <= 200 && cost >= 50:
            percentage = .15;
             break;
         
         case cost > 200:
            percentage = .1;
             break;
     }
     return percentage * cost;

 }
var bills = [124, 48, 268];

var tipAmounts = [tipCalculator(bills[0]), tipCalculator
(bills[1]), tipCalculator(bills[2])];

var totalBill = [bills[0] + tipAmounts[0], bills[1] + tipAmounts[1],
bills[2] + tipAmounts[2]]; 

 console.log(tipAmounts);
 console.log(totalBill);
 console.log(tipCalculator(124));




