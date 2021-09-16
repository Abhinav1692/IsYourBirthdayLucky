const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumberButton = document.querySelector('#check-button');
const outputArea =  document.querySelector("#output");




function checkLuckyNumber()
 { // outputArea.style.display="none";
  
   const dob = dateOfBirth.value;
   const number = luckyNumber.value;

   console.log(dob);
   console.log(number);

   
   var sum=findSum(dob);

   if(sum && number.length!==0)
   {
     if(sum % number === 0){
       showMessage(number," is a Lucky Number 🎉🎁");
     }
    else
    {  
      showMessage(number," is Not that Lucky 😌😯");
    }
   }
  else{
    outputArea.innerText="Please enter both the fields 😡";
    }
}

checkNumberButton.addEventListener( "click", checkLuckyNumber);


function findSum(dob)
{  let sum=0;
  dob=dob.replaceAll("-","");  
for(let i=0;i<dob.length;i++) {
    sum+=Number(dob.charAt(i));  //typecasting: sring to number
}
return sum;
}

function showMessage(number,message){
// { outputArea.style.display="block";
 outputArea.innerText= String(number) + message;
}