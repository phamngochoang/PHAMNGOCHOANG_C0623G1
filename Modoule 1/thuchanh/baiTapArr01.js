 // Bài 1: hiển thị các cột chẵn
        // let arr = [
        //     [3,1,5,3],
        //     [4,4,2,2],
        //     [1,1,1,1],
        //     [3,0,3,5]
        // ]
        // for(let j = 0;j < arr[i].length;j++ ){
        //     if(j %2 ==0){
        //         let chan = 0;
        //         for(let i =0;i < arr.length; i++){
        //             chan += arr[i][j];
        //         }
        //         console.log(chan);
        //     }
        // }


        // //Bài 2: Tính tổng các giá trị đường viền
        // let arr = [
        //     [3, 1, 5, 3],
        //     [4, 4, 2, 2],
        //     [1, 1, 1, 1],
        //     [3, 0, 3, 5]
        //     ];
        //     let num = 0;
        //     for(let i = 0;i < arr.length; i++){
        //         for(let j = 0;j < arr[i].length;j++){
        //             if(i == 0 || i == 3 || j==0 || j == 3){
                        
        //                 num += arr[i][j];
        //             }
        //         }
                
        //     }console.log(num);
            

            //Bài 3: Tìm ra vị trí [i,j] của số chẳn đầu tiên
            // let arr = [
            //             [3, 1, 5, 3],
            //             [4, 4, 2, 2],
            //             [1, 1, 1, 1],
            //             [3, 0, 3, 5]
            //             ];
            //             let count=0
            //     for(let i = 0;i < arr.length;i++){
            //         for(let j = 0;j < arr[i].length;j++){
            //             if(arr[i][j] %2 == 0){
            //                 count++;
            //                 if(count==1){
            //                     console.log("vị trí số chẵn đầu tiên là hàng "+i+ " cột "+j);
            //                 }
            //             }
            //         }
            //     }

            // Bài 4: Tính tổng các số nguyên tố trong mảng 2 chiều

            // let arr = [
            //     [3,1,5,3],
            //     [4,4,2,2],
            //     [1,1,1,1],
            //     [3,0,3,5]
            // ];
            // let num = 0;
            // for(let i=0;i<arr.length;i++){
            //     for(let j=0;j<arr[i].length;j++){
            //         for(let n = 2;n < arr[i][j]; n++){
            //             if(arr[i][j]%n != 0){
            //                 num +=arr[i][j];
            //             }
            //         }
            //     }
            // }console.log(num);

            // //Bài 5: Tính tổng: tam giác trên trái, trên phải, dưới trái, dưới phải
            // let arr = [
            //     [3,1,5,3],
            //     [4,4,2,2],
            //     [1,1,1,1],
            //     [3,0,3,5]
            // ];
            // let sum = 0;
            // for(let i=0;i<arr.length;i++){
            //     for(let j=0;j<arr[i].length-i;j++){
            //         sum += arr[i][j];  
                                     
            //     }
            // }console.log(sum);

            //Bài 5: Tính tổng: tam giác trên phải
            let arr = [
                [3,1,5,3],
                [4,4,2,2],
                [1,1,1,1],
                [3,0,3,5]
            ];
            let sum = 0;
            for(let i=0;i<arr.length;i++){
                for(let j=0;j <= arr[i].length-1-i;j++){
                    sum += arr[i][j];                                       
                }
            }console.log(sum);

