function check(){
    let num = +prompt("nhap so");
    if(num === NaN){
        alert('xin nhap bang so');
    } else if (num > 0 &&  num /parseInt(num)===1) {
        return true        
    } else {
        return false
    }
}
