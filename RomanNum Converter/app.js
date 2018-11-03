var submit1 = document.getElementById("num-to-roman");
var submit2 = document.getElementById("roman-to-num");

submit1.addEventListener("click", numToRom);
submit2.addEventListener("click", romToNum);

function numToRom() {
    event.preventDefault();

    var romanNums = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    var numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

    let num = Number(document.getElementById("number-inp").value);
    let rom = "";
    let rOut = document.getElementById("roman-out");

    for(let i = 0; i < numbers.length; i++) {
        while(num >= numbers[i]) {
            rom += romanNums[i];
            num -= numbers[i];
        }
    }

    rOut.innerHTML = rom;
}

function romToNum() {
    event.preventDefault();

    let romStr = String(document.getElementById("roman-inp").value);
    let nmbr = numFromChar(romStr.charAt(romStr.length-1));
    let nOut = document.getElementById("number-out");

    if(romStr.length > 1) {
        for(let i = romStr.length-1; i > 0; i--) {
            if(numFromChar(romStr.charAt(i)) > numFromChar(romStr.charAt(i-1))) {
                nmbr -= numFromChar(romStr.charAt(i-1));
            } else {
                nmbr += numFromChar(romStr.charAt(i-1));
            }
        }
    }

    nOut.innerHTML = nmbr;
}

function numFromChar(char) {
    switch(char) {
        case 'M' : return 1000;
        case 'D' : return 500;
        case 'C' : return 100;
        case 'L' : return 50;
        case 'X' : return 10;
        case 'V' : return 5;
        case 'I' : return 1;
    }
}

