var string = "How much could a wood?"
var secondString = "Hello Bye Hello Bye Hello Bye."
var addString = "85"

length(secondString);
length(string);
slice(string, 1, 5);
charAt(string, 0)
charAt(string, 15)
charAt(string, 10)
concat(string, addString);
console.log(string, addString)
string = replace("How", "*", "H");
console.log(string);
secondString = replaceAll(secondString, "g", "l");
console.log(secondString);


// Posts the string in the console log
function length (string) {
    console.log(string);
}

// Slices certain placements of the string 
function slice (OGString, start, end) {
    var newString = "";
    for(let i=start; i < end; i++){
       newString += OGString.charAt(i);
    }
    console.log(newString);
}

function replace(word,symbol,letter) {
    var index = -1
    var newStr = "";
    for(let A = 0; A < word.length; A++){
        if(word.charAt(A) === letter){
            index = A;
        }
    }
    for(let i = 0; i < word.length; i++){
        if (i === index) {
            newStr += symbol
        } else {
            newStr += word.charAt(i);
        }
    }
    return newStr
}

function replaceAll (OGString, symbol,letter) {
    var newStr = "";
    for(let A = 0; A < OGString.length; A++){
        if(OGString.charAt(A) === letter){
            // index.push(A);
            newStr += symbol
        } else {
            newStr += OGString.charAt(A);
        }
    }
    return newStr
}

function concat (targetStr, addingStr) {
        targetStr = targetStr + addingStr;
        return targetStr
}

function charAt (targetStr, target) {
    for(let i = 0; i < targetStr.length; i++){
        if (i === target)
        console.log(targetStr[i]);
    }
}