function compute()
{
   
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    var interest = principal*rate*years / 100;

    var year = new Date().getFullYear() + parseInt(years);

    document.getElementById("result").innerHTML="If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+interest+",\<br\>in the year "+year+"\<br\>"

    
}
        
function updateRate(){
    var rateVal = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateVal;
}

function checkData(){
      //Create references to the input elements we wish to validate
      var principal = document.getElementById("principal");
      

      //Check if principal field is 0
      if(principal.value == 0){
            alert("Enter a positive number.");
            principal.focus();
            
            return false;
      }

      

     //If all is well return true.
      compute();
      return true;
}
