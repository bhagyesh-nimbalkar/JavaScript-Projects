const page = document.querySelector('.page');
const outer = document.querySelector('.outer');
const inner = document.querySelector('.inner');
const outEye = document.querySelectorAll('.eye1');
const inEye = document.querySelectorAll('.eye2');
const arr1=[];
let MyInterval;
const FindPosition = (e,outEye,x)=>{
  let mouseX = e.clientX;
      let mouseY = e.clientY;

       let eye = outEye.getBoundingClientRect();
      let eyeX  =  eye.left+eye.width/2;
      let eyeY = eye.top+eye.height/2;  // Center of the eye

      let dy = mouseY-eyeY;
      let dx = mouseX-eyeX;   

      let angle = Math.atan2(mouseY-eyeY,mouseX-eyeX); // Angle between two points

      let r = Math.min(x,Math.hypot(dy,dx)); // Radius of the movement

      let offsetX = Math.cos(angle)*r;  // Finding the co-ordintes
      let offsetY = Math.sin(angle)*r;

      outEye.style.transform= `translate(${offsetX}px,${offsetY}px)`; 
}
page.addEventListener('mousemove',(e)=>{
  clearInterval(MyInterval);
  outEye.forEach((ele)=>{
    FindPosition(e,ele,40);
  });
  inEye.forEach((ele)=>{
    FindPosition(e,ele,7);
  });
});
page.addEventListener('mouseleave',()=>{
    Play();
});
const Play = ()=>
{
  MyInterval = setInterval(()=>{
  outEye.forEach((ele)=>{
           ele.classList.toggle('blink');
     });
  },1900);
}
Play();