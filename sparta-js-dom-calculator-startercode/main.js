document.addEventListener("DOMContentLoaded", function() {
  console.log("THE DOME IS LOADED");
//Get elements and store them in a variable
var buttonNum = document.getElementsByClassName('buttonNum');
var operButton = document.getElementsByClassName('operator');

var equalButton = document.getElementById('equals');
var clrButton = document.getElementById('clear');
var screenDisp = document.getElementById('screen');
var string = "";

var num1;
var num2;
var oper;
var tap = 1;

  //clear button
  clrButton.addEventListener("click", function() {
    //num1 and num2 set to 0
    num1 = 0;
    num2 = 0;
    screenDisp.innerHTML = "Sparta Calculator";
    tap = 1;//reset to turn1
  });

  //Number bottons
  buttonNum[6].addEventListener("click", function(event) {
    //Prevent bubling
    event.stopPropagation();
    //Display number
    screenDisp.innerHTML = "1" + string;
    if (tap === 1) {
    //Assigning input to num1 and num2 depending on its order
      num1 = 1;
    } else {
      num2 = 1;
    }
  })

  buttonNum[7].addEventListener("click", function(event) {
    event.stopPropagation();
    screenDisp.innerHTML = "2";
    if (tap === 1) {
      num1 = 2;
    } else {
      num2 = 2
    }
  })

  buttonNum[8].addEventListener("click", function(event) {
    event.stopPropagation();
    screenDisp.innerHTML = "3";
    if (tap === 1) {
      num1 = 3;
    } else {
      num2 = 3;
    }
  })

  buttonNum[3].addEventListener("click", function(event) {
    event.stopPropagation();
    screenDisp.innerHTML = "4";
    if (tap === 1) {
      num1 = 4;
    } else {
      num2 = 4;
    }
  })

  buttonNum[4].addEventListener("click", function(event) {
    event.stopPropagation();
    screenDisp.innerHTML = "5";
    if (tap === 1) {
      num1 = 5;
    } else {
      num2 = 5;
    }
  })

  buttonNum[5].addEventListener("click", function(event) {
    event.stopPropagation();
    screenDisp.innerHTML = "6";
    if (tap === 1) {
      num1 = 6;
    } else {
      num2 = 6;
    }
  })

  buttonNum[0].addEventListener("click", function(event) {
    event.stopPropagation();
    screenDisp.innerHTML = "7";
    if (tap === 1) {
      num1 = 7;
    } else {
      num2 = 7;
    }
  })

  buttonNum[1].addEventListener("click", function(event) {
    event.stopPropagation();
    screenDisp.innerHTML = "8";
    if (tap === 1) {
      num1 = 8;
    } else {
      num2 = 8;
    }
  })

  buttonNum[2].addEventListener("click", function(event) {
    event.stopPropagation();
    screenDisp.innerHTML = "9";
    if (tap === 1) {
      num1 = 9;
    } else {
      num2 = 9;
    }
  })

  if (tap === 1) {
  //Operator buttons
    operButton[3].addEventListener("click", function(event) {
      event.stopPropagation();
      screenDisp.innerHTML = "+";
      //Assigning number to operator
      op = 1;
      //Order of input
      tap = 2;
    })

    operButton[2].addEventListener("click", function(event) {
      event.stopPropagation();
      screenDisp.innerHTML = "-";
      op = 2;
      tap = 2;
    })

    operButton[1].addEventListener("click", function(event) {
      event.stopPropagation();
      screenDisp.innerHTML = "/";
      op = 3;
      tap = 2;
    })

    operButton[0].addEventListener("click", function(event) {
      event.stopPropagation();
      screenDisp.innerHTML = "*";
      op = 4;
      tap = 2;
    })
  }
  //Perform calculation
  equalButton.addEventListener("click", function(event) {
    if (tap === 2) {
      var result;
      //Addition
      if (op == 1) {
        result = num1 + num2;
      }
      //Subtraction
      if (op == 2) {
        result = num1 - num2;
      }
      //Division
      if (op == 3) {
        result = num1 / num2;
      }
      //Multiplication
      if (op == 4) {
        result = num1 * num2;
      }
      //Display answer
      screenDisp.innerHTML = (result);

      tap = true;
      //Reset tap to 1
      num1 = 0;
      num2 = 0;
    }
  })
// end of dom
})
