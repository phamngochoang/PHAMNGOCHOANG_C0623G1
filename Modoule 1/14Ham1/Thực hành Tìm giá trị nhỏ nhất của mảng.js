
// let arr1 = [3, 5, 1, 8, -3, 7, 8];
// function minArray(arr) {
//     let min = arr[0];
//     for(var i = 1; i < arr.length; i++){
//         if(arr[i] < min){
//             min = arr[i];
//         }
//     }
//     return min;
// }

//  let min = minArray(arr1);
//  alert(min);


//mang rỗng thì return trả về -1
function minArray(arr) {
    if(arr.length == 0)
        return -1;
        
    let min = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
        }
    }
    return min;
}
let arr1 = [];
 let min = minArray(arr1);
 alert(min);