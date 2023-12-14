const btn  =document.querySelector(".btn");
const text = document.querySelector(".url");
const img = document.querySelector(".qr");
const qrbox = document.querySelector("#generate");
text.addEventListener('keyup',()=>{
        let txt = text.value.toString();
        console.log(txt.length);
        if(txt.length > 0) 
        { 
              btn.disabled=false;
        }
        else 
        {
         btn.disabled=true;
         qrbox.classList.remove("active");
         img.classList.remove("active");
        }
});
btn.addEventListener('click',()=>{
       let txt = text.value.toString();
       btn.value="Generating QR Code....";
       img.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${txt}`;
       img.addEventListener("load",()=>{
       qrbox.classList.add("active");
       img.classList.add("active");
       btn.value="Generate QR Code";
       });
});
window.addEventListener('keyup',(e)=>{
        if((e.key === 'Enter') && (text.value.length>=1))
        {
            let txt = text.value.toString();
            btn.value="Generating QR Code....";
            img.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${txt}`;
            img.addEventListener("load",()=>{
            qrbox.classList.add("active");
            img.classList.add("active");
            btn.value="Generate QR Code";
            });
        }
});
