    var number = parseInt(prompt());
    var str = number.toSting();
    var result = [str['']];
        for(var i=1; i<result.length; x++)
        {
        if((result[i-1]%2 === 0)&&(result[i]%2 === 0))
        {
            result.push('-');
         }else{
            result.push();
            }
         }
document.write(result.concat(''));