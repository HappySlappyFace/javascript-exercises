const removeFromArray = function(arr) {
    var nbs = Array.from(arguments);
    nbs.splice(0,1);
    console.log(nbs)
    nbs.forEach(e => {
        var ind= arr.indexOf(e);
        if (ind !==-1){
            arr.splice(ind,1);
        }
    });
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
