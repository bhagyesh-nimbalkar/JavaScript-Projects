const Convert = (x) =>
{
    return  x.split('').sort().join('');
}
const isAnagram = (a,b)=>{
      const str1 = a.toString();
      const str2 = b.toString();

      if(str1.length !== str2.length) return false;

      return Convert(str1) === Convert(str2);
}
const first = "a";
const second = "b";
console.log(isAnagram(first,second));