var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = '0123456789';
var symbols = '!@#$%^&*=-_';

var lowerCaseNum = document.getElementById("lowerCaseNum");
var upperCaseBox = document.getElementById("upperCase");
var numbersBox = document.getElementById("numbers");
var symbolsBox = document.getElementById("symbols");
var submit = document.getElementById("submit");
var yourPw = document.getElementById("yourPw");

submit.addEventListener("click",function(e){
    var characters = lowerCase;
    (upperCasebox.checked) ? characters += upperCase : '';
    (numbersBox.checked) ? characters += numbers : '';
    (symbolsBox.checked) ? characters += symbols : '';
    yourPw.value = password(lowerCaseNum.value, characters);
});


function password(l,characters){
		var passWord = '';
    for(var i = 0; i<l; i++){
    		passWord += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return passWord;
}
