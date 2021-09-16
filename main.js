const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkButton = document.querySelector("#check-number");
const outputArea =  document.querySelector("#output");


checkButton.addEventListener("click", function checkLuckyNumber() {
  
   const dob = dateOfBirth.value;
   const number = luckyNumber.value;
   console.log(dob);
   console.log(number);

   dob=dob.replaceAll("-","");
   const sum=findSum(dob);
   
   if(sum % number === 0){
       outputArea.innerText="Your Birthday is Lucky 🎉🎁";
   }
   else
   {  
      outputArea.innerText="Your Birthday is Not Lucky 😌😯";
   }
// }
// else{
//    outputArea.innerText="Please enter both the fields 😡";
// }
});
console.log("hello");
function findSum(dob)
{  let sum=0;
for(let i=0;i<dob.length;i++) {
    sum+=Number(dob.charAt(i));  //typecasting: sring to number
}
return sum;
}