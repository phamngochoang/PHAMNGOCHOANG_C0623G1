
// //Bài 1: tìm giá trị lớn nhất của mảng
// let arr = [
//     [3,1,5,3],
//     [4,4,2,2],
//     [1,1,1,1],
//     [3,0,3,5]
// ]
//     let max = arr[0][0];
//     for(let i = 0;i < arr.length;i++){
//         for(let j = 0;i <arr[i].length;j++){
//             if(arr[i][j] > max){
//                 console.log(arr[i][j] + ' là giá trị lớn nhất của mảng ');
//             }
//         }
//     }

// //Bài 2: tìm giá trị lớn thứ 2 trong mảng
//     let arr = [3,1,5,3,4,5,2,7];
//     function maxSecond(number){
//         let max = number[0];
//         let secondMax = '';
//         for(let i =1;i< number.length;i++){
//             if(number[i] > max){
//                 secondMax = max;
//                 max = number[i];
//             }else if(number[i] > secondMax && number[i] < max){
//                 secondMax =number[i];
//             }
//         }
//         console.log(secondMax + 'Là giá trị lớn thứ 2');
//     }
//     maxSecond(arr);

    // //Bài 3: Tính tổng 3 giá trị lẻ đầu tiên
    // let arr = [3,1,5,3,4,5,2,7];
    // function tong3sole(number){
    //     let tong = 0;
    //     let count = 0;
    //     for(let i=0;i<number.length;i++){
    //         if(number[i] %2 != 0){
    //             tong += number[i];
    //             count++;
    //             if(count == 3){
    //                 break;
    //             }
    //         }
    //     }
    //     return tong;
    // }
    // console.log(tong3sole(arr));

        // //Bài 4: Đảo ngược mảng
        // let arr = [3,1,5,3,4,5,2,7];
        // function daonguocmang(number){
        //     for(i=0;i<number.length/2;i++){
        //         number[i] = arr[number.length-1-i]
        //         arr[number.length-1-i] = number[i];
        //     }
        //     return number;
        // }

        // console.log(daonguocmang(arr));

        // //Bài 5: nối mảng b vào mảng a
        // let a = [3,1,5,3,4,5,2,7];
        // let b = [6,8,4,2];

        // let c = a.concat(b);
        // console.log(c);

        // //Bài 6: tính tổng các số nguyên tố trong mảng
        let arr = [3,1,5,3,4,5,2,7];
        function tongsonguyento(number){
            let tong = 0;
            for(let i =0;i <number.length;i++){
                for(let j = 1;j <= number[i] ;j++){
                    if(number[i] %j ==0){
                        tong +=number[i];
                    }
                }
            }
            return tong;
        }       

        console.log(tongsonguyento(arr));

        
        