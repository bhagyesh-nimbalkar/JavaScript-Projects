// Accessing all required Elements 

const pass = document.querySelector("#pass");
const eye = document.querySelector(".icn");
const list = document.getElementsByTagName("li");

// Text hide and show 
const EyePress = ()=>{
      if(eye.classList.contains("fa-eye"))
      {
           eye.classList.remove("fa-eye");
           pass.setAttribute("type","text");
           eye.classList.add("fa-eye-slash");
      }
      else 
      {
        eye.classList.add("fa-eye");
        pass.setAttribute("type","password");
        eye.classList.remove("fa-eye-slash");
      }
}
const check = [false,false,false,false,false];
const change = ()=>{
      for(let i=0;i<check.length;i++)
      {
            if(check[i])
            {
                if(list[i].firstChild.classList.contains('fa-circle'))
                {
                  list[i].firstChild.classList.remove("fa-circle");
                  list[i].firstChild.classList.add("fa-check");
                  list[i].firstChild.style.fontSize="20px";
                  list[i].firstChild.style.color="rgb(107, 150, 173)";
                  list[i].firstChild.style.transform="translateY(3px)";
                }
            }
            else 
            {
               if(list[i].firstChild.classList.contains('fa-check'))
               {
                list[i].firstChild.classList.remove("fa-check");
                list[i].firstChild.classList.add("fa-circle");
                list[i].firstChild.style.fontSize="10px";
                list[i].firstChild.style.color="rgba(0,0,0,0.5)";
                list[i].firstChild.style.transform="translateY(-2px)";
               }
            }
      }
}
// Validate the string 
const Validate = ()=>
{
     let text = pass.value.toString();
     if(/\d{1,}/.test(text)) check[4]=true; else check[4]=false;
     if(/[A-Z]{1,}/.test(text)) check[2]=true; else check[2]=false;
     if(/[a-z]{1,}/.test(text)) check[1]=true; else check[1]=false;
     if(/^.{8,}$/.test(text)) check[0]=true; else check[0]=false;
     change();
}
// All the Event Listeners 
eye.addEventListener("click",EyePress);
pass.addEventListener('keyup',Validate);

