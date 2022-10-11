//get the values from the interface
//starts or controller function
function getValues() {
    //get the calues from the page
    let fizzValue = document.getElementById("fizzValue").value;
    let buzzValue = document.getElementById("buzzValue").value;
  
    //parse the value into integers
    fizzValue = parseInt(fizzValue);
    buzzValue = parseInt(buzzValue);
  
    //validation that input is an int
    if (Number.isInteger(fizzValue) && Number.isInteger(buzzValue)) {
      //call fizzBuzz and pass in user values, returns
      let fbArray = fizzBuzz(fizzValue, buzzValue);
  
      //diplay results on the page
      displayNumbers(fbArray);


    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Only intergers are allowed for Fizz Buzz",
      });
    }
  }
  
  //get numbers from 1 to 100 with a loop
//determine multiples of each individual number
//determine multiples of both together
//logic
  function fizzBuzz(fizzValue, buzzValue) {
    //init returnArray
    let returnArray = [];
  
    //loop 0 to 100
    for (let i = 1; i <=100; i++) {
      
      //check to see if divisable by both (3 & 5)
      if (i % fizzValue == 0 && i % buzzValue == 0) {
        returnArray.push('FizzBuzz')
      }

      //check if divisable by fizz value
      else if(i % fizzValue == 0){
        returnArray.push('Fizz')
      }

      //check to see if divisable by buzz value
      else if(i % buzzValue == 0){
      returnArray.push('Buzz')
      }

      else {
        returnArray.push(i);
      }

    }
  
    return returnArray;
  }
  
  //display the data in table
 //View
 function displayNumbers(fbArray) {
    let className = "fbArray";
    let templateRows = "";
  
    //checking to see if the remainder of the number is equal to 0.
    for (let i = 0; i < fbArray.length; i++) {
      let number = fbArray[i];
    
      
  
      //creates rows in table
      if(i % 10 == 0) {
        templateRows += "<tr>";
      }
      templateRows += `<td class="${className}">${number}</td>`;
  
      if ((i + 1) % 10 == 0) {
        templateRows += "</tr>"
      }
    }
    document.getElementById("results").innerHTML = templateRows;
 }


