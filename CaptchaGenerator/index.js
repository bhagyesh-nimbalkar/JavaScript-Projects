// Accessing all the required elements. 

const captcha = document.querySelector("#text");
const refresh = document.querySelector("#r-btn");
const input = document.querySelector("#inp");
const message = document.querySelector("#res");
const submitButton = document.querySelector("#btn");

// Variable to store the result for comparing afterwards.
let CaptchaText="";

// Generate Random String 
const generateCaptcha = () => {
    const CaptchaString = Math.random().toString(36).substring(2,7);
    const GeneratedText = CaptchaString.split("")
    .map((ele)=>(Math.random()>0.5?ele
    .toUpperCase():ele)).join("");

    CaptchaText = GeneratedText.toString();
    captcha.innerHTML=CaptchaText;
};
// After Pressing refresh Button .
const refreshButton = ()=>{
       generateCaptcha();
       validate();
};
// Check to Disable or enable the submit Button
const validate = () =>{
      submitButton.classList.toggle("disabled",!input.value);
      if(!input.value) 
      message.classList.remove("active");
};
// After Pressing the submit Button.
const submit = () =>{
      CaptchaText = CaptchaText.split("")
      .filter((ele)=>(ele!==" "))
      .join("");
      
      input.value = input.value.toString().split("")
      .filter((ele)=>(ele!==" "))
      .join("");
      
      if(CaptchaText === input.value.toString())
      {
             message.classList.add("active");
             message.innerHTML = "Entered Captcha is correct.";
             message.style.color="blue";
      }
      else 
      {
            message.classList.add("active");
            message.innerHTML = "Entered Captcha is not correct.";
            message.style.color="red";
      }
};
// EventListeners 
refresh.addEventListener("click",refreshButton);
input.addEventListener('keyup',validate);
submitButton.addEventListener('click',submit);

// Call the generated text when page loads
generateCaptcha();