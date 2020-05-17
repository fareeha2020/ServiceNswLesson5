let sentence = "The quick brown fox jumps over the lazy dog.";
/* Write function that searches for
 a string inside the sentence above.
  The function should return true if
   the string
 is found or false otherwise*/
function find(stg)
{
    return sentence.includes(stg);
}
 console.log(find("fox"));
 console.log(find("Fox"));
 /*Write function that searches for a string inside the sentence above. The function should return the index of the first occurrence of the string if the string is found or -1 otherwise.*/ 
function searchString(stg){
   if(find(stg))
   {
    return sentence.indexOf(stg);
}
    else{
        return -1;
    }
}
console.log(searchString("fox"));
console.log(searchString("finx"));
//3.Write a function that takes a string and returns the first three characters of that string.
function takeString(stg)
{ 
       return sentence.substring(0,3);
}
console.log(takeString(sentence));
console.log(takeString("brown"));
//4.Write a function that takes a string and returns the last two characters of that string.
function takeString1(mystring)
{ 
   //start is second last char
   
    return mystring.substring(mystring.length-2);
}
console.log(takeString1(sentence));
console.log(takeString1("brown"));

//5.Write a function that converts a string into an array of words where a word is any string separated by a space.
function convertString(stg){
    return stg.split(" ");
}
console.log(convertString("iam a good girl "));
