const sumAll = function(a,b) {
    if (typeof(a) === 'string' || typeof(b) === 'string'){
        return "ERROR"
    }
    if (isNaN(a) || isNaN(b)){
        return "ERROR"
    }
    if (a<0 || b<0){
        return "ERROR"
    }
    if (b<a){
        let aux=a;
        a=b;
        b=aux;
    }
    var result=0;
    for (var i=a;i<=b;i++) {result+=i};
    return result;
};

// Do not edit below this line
module.exports = sumAll;
