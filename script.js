function stringChop(str, length) {
    if (str === null) {
        return [];
    }
    let result = [];
    for (let i = 0; i < str.length; i += length) {
        result.push(str.slice(i, i + length));
    }
    return result;
}


// // Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
