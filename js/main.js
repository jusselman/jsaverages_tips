var john = {
  fullName: "John Smith",
  bills: [124, 48, 26800, 180, 42],
  calcTip: function() {
    this.tips = [];
    this.total = [];

    for(i = 0; i < this.bills.length; i++) {
      var bill = this.bills[i];
      var percentage;

      if(bill < 50) {
        percentage = .20
      } else if (bill > 50 && bill < 200) {
        percentage = .15
      } else {
        percentage = .1
      }

      this.tips[i] = bill * percentage;
      this.total[i] = bill + bill * percentage;

    }

  }
}

var mark = {
  fullName: "Marky Mark",
  bills: [77, 475, 110, 45],
  calcTip: function() {
    this.tips = [];
    this.total = [];

    for(i = 0; i < this.bills.length; i++) {
      var bill = this.bills[i];
      var percentage;

      if(bill < 100) {
        percentage = .2
      } else if (bill > 100 && bill < 300) {
        percentage = .1
      } else {
        percentage = .25
      }

      this.tips[i] = bill * percentage;
      this.total[i] = bill + bill * percentage;

    }

  }
}

function calcAverage(tips) {
  var sum = 0;
  for(var i = 0; i < tips.length; i++) {
    sum = sum + tips[i];
  }
  return sum / tips.length;
}

john.calcTip();
mark.calcTip();


john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);

console.log(john, mark);

if(john.average > mark.average) {
  console.log(john.fullName +"\'s" + " family averages higher tips than " + mark.fullName + "\'s at $" + john.average + " versus Mark's $" + mark.average);
} else {
  console.log(mark.fullName + '\'s' + " family averages higher tips than " + john.fullName + "\'s at $" + mark.average + " versus John's $" + john.average);
}
