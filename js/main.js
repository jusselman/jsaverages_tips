// CALCULATE WHO AVERAGES THE MOST POINTS

var johnAverage = (89 + 1420 + 103)/3;
var mikeAverage = (89 + 420 + 103)/3;
var maryAverage = (89 + 4 + 103)/3;

function pointSum() {
  if( johnAverage > mikeAverage && johnAverage > maryAverage) {
    console.log('John wins,' + ' his average is ' + johnAverage + ' and Mike averaged ' + mikeAverage + ' and Mary averaged ' + maryAverage);
  } else if( mikeAverage > johnAverage && mikeAverage > maryAverage) {
    console.log('Mike wins' + ' his average is ' + mikeAverage + ' and John averaged ' + johnAverage + ' and Mary averaged ' + maryAverage);
  } else if( maryAverage > johnAverage && maryAverage > mikeAverage) {
    console.log('Mary wins' + ' her average is ' + maryAverage + ' and John averaged ' + johnAverage + ' and Mike averaged ' + mikeAverage);
  }
   else {
    console.log('Looks like a draw');


  }
}

pointSum();



// CALCULAR CUANTOS ANOS QUEDAN HASTA JUBILARSE //
function calculateAge(birthYear) {
  return 2018 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageJane = calculateAge(1779);
var ageBill = calculateAge(1818);

  console.log(ageJohn, ageJane, ageBill);

function untilRetire(year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;

    if(retirement < 0) {
      console.log(firstName + ' is already retired');
    } else if(retirement == 0) {
      console.log(firstName + ' retired this year!');
    } else {
    console.log(firstName + ' retires in ' + retirement + ' years.');
}
};


untilRetire(1990, 'John');
untilRetire(1492, 'Mary');
untilRetire(1953, 'Jesus');


// TERNARY OPERATOR AND SWITCH STATEMENTS //

var primerNombre = "Josue";
var edad = 22;

var drinkingAge = function(primerNombre) {
edad >= 18 ? console.log(primerNombre + ' bebe chela.') : console.log(primerNombre + " bebe jugo.");
}
var bebida = edad <= 21 ? 'chela' : 'jugo';

console.log(bebida);

drinkingAge("lola");

if(edad <= 21) {
  var bebida = 'beer';
} else {
  var bebida = 'juice';
}
console.log(bebida);

// SWITCH STATEMENT //
var firstName = "Josue";
var job = 'professor';
switch (job) {
    case 'teacher':
    case 'instructor':
    case 'professor':
    case 'maestro':
      console.log(firstName + ' teaches kids to code');
        break;
    case 'driver':
      console.log(firstName + ' drives an uber');
        break;
    case 'designer':
      console.log(firstName + ' makes websites');
        break;
      default:
        console.log(firstName + ' does something else');

}

// ANOTHER SWITCH STATEMENT //

var age = 24;

switch (true) {
  case age < 13:
    console.log(firstName + ' is a boy.');
      break;
  case age >= 13 && age < 20:
    console.log(firstName + ' is a teenager');
      break;
  case age >= 20 && age < 30:
    console.log(firstName + ' is a young man');
      break;
  default:
    console.log(firstName + ' is a man');
}

// TRUTHY VERSUS FASLY //

var height;

height = 0;

if (height || height === 0) {
  console.log('Variable is defined');
} else {
  console.log('Variable has NOT been defined');
}

// FUNCTION STATEMENTS AND EXPRESSIONS //

// FUNCTION DECLARATION : function forALiving(job, firstName) //

//function expression declare the variable first //
var forALiving = function(job, firstName) {
    switch(job) {
      case 'teacher':
          return firstName + ' teaches kids to code';
      case 'driver':
          return firstName + ' drives an Uber';
      case 'designer':
          return firstName + ' designs websites';
      default:
          return firstName + ' does something else';

    }
}

console.log(forALiving('teacher', firstName));
console.log(forALiving('designer', 'Janina'));
console.log(forALiving('retired', 'Miller'));


// ARRAYS ARRAYS ARRAYS ARRAYS ARRAYS //

// INITIALIZE NEW ARRAY //
var names = ['Josue', 'Lola', 'Biff'];
var years = new Array(1990, 1969, 1948);

console.log(names[0]);
console.log(names.length);


// MUTATE ARRAY DATA
names[1] = 'Ben';
names[names.length] = 'Mary';
console.log(names);

// DIFFERENT DATA TYPES //
var john = ['John', 'Smith', 1985, 'teacher', false];

john.unshift('Billy');
console.log(john);

console.log(john.indexOf(1985));

 var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer';
console.log(isDesigner);



// CODE CHALLENGE 3 //

// var tips = [9.6, 18.6, 26.8];
// var totals =[57.6, 142.6, 294.8];

// var percent = [.1, .15, .2];
// var tipCalc = function(bill, percent) {
//
// }

function tipCalculator(bill) {
  var percentage;
  if(bill < 50) {
    percentage = .2;
  } else if (bill >= 50 && bill < 200) {
    percentage = .15;
  } else {
    percentage = .1;
  }
  return percentage * bill;
}

console.log(tipCalculator(100, 200, 50));

var bills = [268, 124, 48];
var tips = [tipCalculator(bills[0]),
            tipCalculator(bills[1]),
            tipCalculator(bills[2])];

var finalValues = [bills[0] + tips[0],
                   bills[1] + tips[1],
                  bills[2] + tips[2]];


console.log(tips, finalValues);
