const arrayTest = [ -2, -3, 4, -1, -2, 1, 5, -3];

function sumArray (arr){

    var maxsofar = Number.NEGATIVE_INFINITY;
    var maxendinghere = 0;

    arr.forEach(element => {
        maxendinghere = maxendinghere + element
        if(maxsofar < maxendinghere){
            maxsofar = maxendinghere;
        } else if ( maxendinghere < 0){
            maxendinghere = 0;
        }
    });

    console.log(maxsofar);
    return maxsofar;
    //return arr;
}

sumArray([]);
sumArray([1]);
sumArray([1, -3]);
sumArray([-3, 7]);
sumArray(arrayTest);

