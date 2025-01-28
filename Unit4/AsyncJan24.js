numberList = [1,23,56,3,56,3,20,200]

//creat function that uses while loop to console.log the list in reverse

//reverseNumberList = numberList.reverse();
//console.log(reverseNumberList)

function reverseNumbers(){
    var x = 7
    while (x >= 0){
        console.log(numberList[x])
        x -=1
    }
}


reverseNumbers()