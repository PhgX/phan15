//Bai 1:
// let num;
// let pow;
// function pow_() {
//     num = +document.getElementById("num").value;
//     document.getElementById("pow").innerHTML = do_pow(num);
// }

// function do_pow(rd_num){
//     pow = Math.pow(rd_num,2);
//     return pow;
// }

//Bai 2:
// S=\pi r^{2}} với r là bán kính.
// chuvi = 2r*Pi
// let area_;
// let diameter_;
// let ban_kinh;
// let do_pow;
// function doMath(){
//     ban_kinh = +document.getElementById("radius_").value;    
//     document.getElementById("dientich").innerHTML = "Diện tích hình tròn là : " + area_math(ban_kinh);
//     document.getElementById("chuvi").innerHTML = "Chu vi hình tròn là: " + diameter_math(ban_kinh);
// }

// function area_math(bankinh){
//     do_pow = Math.pow(bankinh,2)
//     area_ = do_pow*Math.PI;
//     return area_;
// }

// function diameter_math(bankinh1){
//     diameter_ = 2*bankinh1*Math.PI;
//     return diameter_;
// }

//Bai3
// function do_math(){
//     let result = document.getElementById("num").value;
//     document.getElementById("giaithua").innerHTML = tinh_giai_thua(result);
// }

// let factorial = 1;
// function tinh_giai_thua(x) {
//     for (let i = x; i > 0; i--){
//         factorial *= i;       
//     }
//     return factorial;
// }

//Bai4
// function ketqua(){    
//     let input = document.getElementById("input").value;
//     document.getElementById("check").innerHTML = check(input);
// }

// function check(str){
//     let flag = true;    
//     if (isNaN(str)){
//         flag = false;   
//     }    
//     if (flag === true){
//         alert("là số");
//     } 
//     else {
//         alert("Không phải số");
//     }         
// }

//bai5
// let input ='';
// let sonhapvao=[];
// function ketqua(){
//     document.getElementById("ketqua").innerHTML = check(sonhapvao);   
// }

// function nhap() {    
//     input = document.getElementById("input").value;
//     sonhapvao[sonhapvao.length] = input;
//     document.getElementById("sonhapvao").innerHTML = sonhapvao;
//     document.getElementById("input").value = "";   
// }

// function check(num) {
//     let min;
//     for (let i = 0; i < num.length; i++){
//         min = num[0];
//         if (num[i] < min) {
//             min = num[i]
//         }
//     }
//     return min;
// }

//bai6
// function nhap() {    
//     input = document.getElementById("input").value;    
//     document.getElementById("sonhapvao").innerHTML = input;
//     document.getElementById("input").value = "";
//     check(input);
// }   

// function check(num) {
//     if (num <= 0){
//         alert("Không phải số nguyên dương");
//     } else if (num > 0 && num%parseInt(num)!=0){
//         alert("Không phải số nguyên dương");
//     } else {
//         alert("Là số nguyên dương");
//     }
// }

//bai7
