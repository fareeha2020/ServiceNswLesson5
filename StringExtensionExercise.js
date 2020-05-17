//5.Write a function that counts the number of times a string appears inside the sentence string above.
let sentence = "The quick brown  dog fox jumps over the lazy dog.";
function countString(stg) {
    let count = 0;//a variable which keeps count of it
    let startIndex = 0;//to iterate to index after if we find first occurence
    while (true) {
        let index = sentence.indexOf(stg, startIndex);//startt searching from this point
        if (index == -1) {
            //if we dint find any then break
            break;
        }
        count++;
        startIndex = index + 1;//start searching from next index

    }
    return count;

}


console.log(countString("o"));
console.log(countString("e"));
console.log(countString("he"));
console.log(countString("dog"));