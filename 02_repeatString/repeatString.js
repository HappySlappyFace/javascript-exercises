const repeatString = function(ch,n) {
    if (n==-1){
        return "ERROR"
    }
    console.log(ch);
    let result='';
    for(let i=0;i<n;i++){
        result+=ch
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
