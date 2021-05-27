
   var slider = document.getElementById("rate");
   var output = document.getElementById("rate_val");
   output.innerHTML = slider.value;
slider.oninput = function() { //control with mouse or keyboars
   output.innerHTML = this.value; // output value to id=result 
}
function compute(){
  var p,t,r,si,y, ; // setting up variables for each input 
  p = document.getElementById("principal").value;
  t = document.getElementById("years").value;
  r = document.getElementById("rate").value;
  si = parseInt((p*t*r)/100 );
  y = new Date().getFullYear() + parseInt(t) // add current year to selected year 
       
document.getElementById ('result').innerHTML = "If you deposit "+p ; // output to result
document.getElementById ('result1').innerHTML ="At a rate of: "+r ;  // output to result1
document.getElementById ('result2').innerHTML ="you will receive an amount of "+si ; // output to result2
document.getElementById ('result3').innerHTML ="in the year of " +y ; // output to result3 
}
        
