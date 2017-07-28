module.exports = {
  howManyYears: function(input){

    if (input <= currentYear()){
      console.log("Please enter a year greater than the current year!");

    } else {
    return input - currentYear;
    }
  }
}

function currentYear(){
    var year = new Date.getFullYear();
    return year;
  }