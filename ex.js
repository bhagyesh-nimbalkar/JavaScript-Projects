const arr = [3,6,9,12,34,56,78,89]

function BinSearch(arr,find,n)
{
      let l=0,h=n;
      while(l<h)
      {
           let mid = Math.floor((l+h)/2);
           if(arr[mid]===find) return true;
           else if(arr[mid]>find) h=mid;
           else l=mid+1;

           console.log(l,h);
      }
      return false;
}

console.log(BinSearch(arr,3,arr.length));