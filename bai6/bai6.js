let a = +prompt('nhap so a')
let b = +prompt('nhap so b')
let temp;

function swap(){
    temp = a;
    a = b;
    b = temp;
    alert('a = ' + a   + ' b = ' + b)
}