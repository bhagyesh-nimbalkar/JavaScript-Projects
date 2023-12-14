const http = new XMLHttpRequest();
http.open('GET','https://api.dictionaryapi.dev/api/v2/entries/en/greedy');
http.send();

http.onload = ()=>{
      if(http.status===200)
      {
         const txt  = JSON.parse(http.response);
         const x = txt[0]['meanings'][0]['definitions'];
         for(let i=0;i<x.length;i++)
         {
              console.log(x[i].definition);
         }
      }
}