function compute() {
    var principal = document.getElementById("principal").value;
    if (principal <= 0){ //greater then or equal to 0
        alert("Enter a positive number or else!");
        document.getElementById("principal").focus(); //bring back to principal input
        var resultText= "";
    }else{ 
        var rate = document.getElementById("rate").value;
        var years = document.getElementById("years").value;
        var interest = principal * years * rate/100;
        var year = new Date().getFullYear()+parseInt(years); //get present year and add to select years

        var resultText= "If you deposit \<mark\>" + principal + "\<\/mark\>,\<br\>" +
                        "at an interest rate of %\<mark\>" + rate + "\<\/mark\>.\<br\>" +
                        "You will receive an amount of \<mark\>" + interest + "\<\/mark\>,\<br\>" +
                        "in the year \<mark\>" + year + "\<\/mark\>." // not sure yet why it turns yellow
    }
    document.getElementById("result").innerHTML=resultText; // output to result id
    
}
function updateRate(){
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
function validateForm(){

}
        
