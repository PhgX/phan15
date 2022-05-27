let check = "anh gi oi, anh ra an com kia"
let check1 = check.split("")
console.log(check1)
let text = 'a'
let count = 0;
for(let i = 0; i<check1.length; i++){
  if(check[i] === text){
    count ++
  } 
}
if (count === 0){
  count = -1
}
alert('so lan tim thay ky tu trong chuoi: ' + count)