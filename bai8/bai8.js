let a = [];
let i = 0
function input(){
    let num = prompt('nhap so');    
    a[i] = num;
    i++
    document.getElementById('output').innerHTML = a;
}

function reverse(){
    a.reverse();
    document.write(a)
}
