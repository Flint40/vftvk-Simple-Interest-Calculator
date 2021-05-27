function slider() {
   var slider = document.getElementById("rate");
   var output = document.getElementById("rate_val");
   output.innerHTML = slider.value;
slider.oninput = function() {
   output.innerHTML = this.value; 
}
function compute(){
  var p,t,r,si,y, ; 
  p = document.getElementById("principal").value;
  t = document.getElementById("years").value;
  r = document.getElementById("rate").value;
  si = parseInt((p*t*r)/100 );
  y = new Date().getFullYear() + parseInt(t)  
       
document.getElementById ('result').innerHTML = "If you deposit "+p ; 
document.getElementById ('result1').innerHTML ="At a rate of: "+r ;  
document.getElementById ('result2').innerHTML ="you will receive an amount of "+si ; 
document.getElementById ('result3').innerHTML ="in the year of " +y ; 
}
        
