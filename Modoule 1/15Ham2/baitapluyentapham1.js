// //Bài 1
// function aleftMessage(){
//     alert('Xin chào!');
// }
// aleftMessage();

// //Bài 2
// function tanglen1(a){
//     a++;
//     return a;
// }
// document.write(tanglen1(2));

// //Bài 3
//     function ham(a,b){
//         let c =a+b;
//         if(a > b){
//             alert('a lớn b');
//         }else {
//             if(a<b || a==b){
//                 alert('Tổng 2 tham số là'+ c);
//             }
//         }
//     }
//     ham(2,5);

    // //Bài 4
    // function addNumbers() {
    //     firstNum = 4;
    //     secondNum = 8;
    //     result = firstNum + secondNum;
    //     alert(result);

    // }
    // result = 0;
    // alert(result);
    // result = addNumbers(); 

    //Bài 5
    let tencauthu = prompt('Nhập tên ngôi sao');
    let arr = ['Polaris', 'Aldebaran', 'Deneb', 'Vega', 'Altair', 'Dubhe','Regulus'];
    let sao = ['Ursa Minor', 'Tarurus', 'Cygnus', 'Lyra', 'Aquila', 'Ursa Major', 'Leo'];
    let result ='';

    function myFunction(str){
        for(let i = 0;i<arr.length;i++){
            let index = 0;
            if(tencauthu == arr[i]){
                index =i;
                for(let j =0;j<sao.length;j++){
                    if(index == j){
                        result += sao[j];
                        return result;
                    }else{
                        result = 'Không tìm thấy chòm sao';
                        return result;
                    }
                }
            }else{
                result ='Không tìm thấy tên cầu thủ';
                return result;
            }

        }
    }
    document.write(myFunction(tencauthu));
