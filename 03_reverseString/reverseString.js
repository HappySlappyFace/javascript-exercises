const reverseString = function(ch) {
    var revCh="";
    for(let i=0;i<ch.length;i++){
        revCh=ch.charAt(i)+revCh;
    }
    // console.log(revCh);
    return revCh;
}; 

// Do not edit below this line
module.exports = reverseString;
