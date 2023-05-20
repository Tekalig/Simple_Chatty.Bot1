function binar(arry, target) {
    arry.sort((a,b) => a-b); /* this built in method is the best one because it use 
    the lexical patterrn to sort the array but buy using this arrow function we can use this one */
    let min =0, max = arry.length - 1;
    let guess;
    while(min <= max){
        guess = Math.floor((min + max)/2);
        if(arry[guess] === target){
           return guess;
        }else if(arry[guess] < target){
            min = guess +1;
        }else{
            max = guess -1;
        }
    }
    return -1;
}
console.log(binar([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 
    41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97], 73));