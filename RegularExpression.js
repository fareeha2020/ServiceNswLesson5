const EMAIL_REGEX = /(?:[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i;
const URL_REGEX = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i;

//1.Write a function that determines if a string contains a valid email address
function validEmail(stg){
    let valueBoolean=EMAIL_REGEX.test(stg);

    return valueBoolean;
}
console.log(validEmail("abc@gmail.com"));
console.log(validEmail("abcgmail.com"));
//2.Write a function to find the index of the first character of a valid UR
function validUrl(stg){
    let valueBoolean=URL_REGEX.test(stg);
    return valueBoolean;
}
console.log(` valid url ${validUrl("https://gdqgdj.com")}`);
console.log(validUrl("my url  is https://sfscwe. com"));

function urlIndex(stg){
    let indexValue;
    indexValue=stg.search(URL_REGEX);
    return indexValue;

}
 console.log(urlIndex(" my url is http://jhdgh.com"));
 console.log(urlIndex(" http://jhdgh.com"));
  
