//1.Используя итерацию, 
function fibs (fibsCount) {
    const arrayAcc = []
    for (let i = 0; i < fibsCount; i++) {
        if (i < 2) {
            arrayAcc.push(i)
            continue
        }
        console.log(arrayAcc[i-1])
        console.log(arrayAcc[i-2])
        arrayAcc.push(arrayAcc[i-1] + arrayAcc[i-2])
    }
    return arrayAcc
}

//2. Рекурсия

function fibsRecursion (fibsCount,arrayAcc = [0,1]) {
    if (fibsCount === 0) {
        return []
    } else if (fibsCount === 1) {
        return [0]
    }
    const newArray = arrayAcc.slice();
    if (newArray.length < fibsCount ) {
        newArray.push(newArray[newArray.length-1] + newArray[newArray.length-2])
        return fibsRecursion(fibsCount,newArray);
    }
    return newArray
}

//3. Слияние

function merge (arrayLeft,arrayRight) {

    const cleanArray = [];

    while (arrayLeft.length && arrayRight.length) {
        if (arrayLeft[0] < arrayRight[0]) {
            cleanArray.push(arrayLeft.splice(0,1)[0]);
        } else {
            cleanArray.push(arrayRight.splice(0,1)[0]);
        }
    }
    return [...cleanArray, ...arrayLeft, ...arrayRight];
}

function slivRecursion (array) {
    if (array.length < 2) {
        return array;
    }

    const halfArray = Math.floor(array.length / 2);

    const leftArray = array.splice(0,halfArray);

    return merge(slivRecursion(leftArray),slivRecursion(array));

}