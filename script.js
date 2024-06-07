const userInput=document.getElementById('user-input');
const checkBtn=document.getElementById('check-btn');
const clearBtn=document.getElementById('clear-btn');
const results=document.getElementById('results-div');

for (let i=0; i<=9; i++){
  const button=document.getElementById(`button${i}`);
  button.addEventListener('click',()=>{
    userInput.value+=i;
  });
}

const isValidInput=()=>{
  const telRegexList=[
    /^1?\s?\d{3}(\s|-)?\d{3}(\s|-)?\d{4}$/,
    /^1?\s?\(\d{3}\)\s?\d{3}-\d{4}/,
  ];

  for (const telRegex of telRegexList) {
    if (telRegex.test(userInput.value)){
      return true;
    }
  }
  return false;
  }


/*const isValidParenthesis=()=>{ //function to check if input has a valid parenthesis
  let openParenthesisCount=0;
  if (userInput.value.includes('(') || userInput.value.includes(')')){
    for (let i=0;i<userInput.value.length;i++) {
      if (userInput.value[i]==='('){
        openParenthesisCount++;
      }
      else if (userInput.value[i]===')'){
        if(openParenthesisCount===0){
          return false;
        }
        openParenthesisCount--;
      }
    }
    return openParenthesisCount===0; //returns true if valid parenthesis
  }
}*/

const checkNumber=()=>{
   results.textContent=isValidInput(userInput.value) ? `Valid US number: ${userInput.value}` : `Invalid US number: ${userInput.value}`;
   /*if (isValidParenthesis(userInput.value)){
     const telNumber=userInput.value.replace(/[-()\s]/g,'');
     if (telNumber.length===11 && telNumber[0]==='1'){
       return results.textContent=`Valid US number: ${userInput.value}`;
     }
     else if (telNumber.length===10){
       return results.textContent=`Valid US number: ${userInput.value}`;
     }
   }
   else if (isValidInput(userInput.value)){
     return results.textContent=`Valid US number: ${userInput.value}`;
   }*/
}

checkBtn.addEventListener('click',()=>{
  if(!userInput.value){
    alert('Please provide a phone number');
    return;
  }
  else{
    checkNumber();
  }
})

clearBtn.addEventListener('click',()=>{
  results.textContent='';
  userInput.value='';
})


