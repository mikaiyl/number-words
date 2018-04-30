const onesColumn = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
const tensColumn = ["", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
const hundred = "hundred", thousand = "thousand";

    /*
     * Math Function
    */

function columnize(num) {
    let ones = num % 10;
    if (num % 100 < 20 && num % 100 > 9){
        two = ""
        ones = ((num) % 100);
    } else {
        let tens = ((num - ones) % 100);
    }
    let tens = ((num - ones) % 100);
    let hundreds = ((num - ones - tens) % 1000);
    let thousands = ((num - ones - tens - hundreds) % 10000);
    return [ones, tens/10, hundreds/100, thousands/1000];
}

    /*
     * Print Functions
    */

function printColumns(arr) {
    let number = "";
    if (arr[3] > 0){
        number += onesColumn[arr[3]] + " " + thousand + " ";
    }
    if (arr[2] > 0){
        number += onesColumn[arr[2]] + " " + hundred + " ";
    }
    if (arr[1] > 0){
        number += tensColumn[arr[1]] + " ";
    }
    if (arr[0] > 0){
        number += onesColumn[arr[0]] + " ";
    }
    return number.toString() + "<br />";
}

    /*
     * Maine
    **/

(() => {
    let list = document.createElement("div");

    for( let i=1;i<=1000;i++){
        list.innerHTML += printColumns( columnize(  i ) ) ;
    }

    document.getElementById("words").appendChild(list);

})();
