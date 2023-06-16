
var objpro=[
    
       
        {
            text1:" A Bad Workman Always Blames His Tools",
            name1:"proverb"
        },
        {
            text1:"Absence Makes the Heart Grow Fonder",
            name1:"proverb"
        },
        {
            text1:" I love to be execllant in my work",
            name1:"Raqaiah"
        },
];

var counter = 0;
function timedCount() {
  if (counter < (objpro.length)) {
    var textty1= document.getElementById("pro1")
    var textty2 = document.getElementById("pro2")
    textty1.textContent = objpro[counter].text1;
    textty2.textContent = objpro[counter].name1;
    counter++;
  } else{
    counter = 0;
  }
    

}
setInterval(timedCount, 2000);