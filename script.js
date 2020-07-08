var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var char = 'abcdefghijklmnopqrstuvwxyz';
var num = '0123456789';
var sym = '!@#$%^&*=-_';

var charNum = document.getElementById("charNum");
var upperCaseBox = document.getElementById("upperCase");
var numBox = document.getElementById("num");
var symBox = document.getElementById("sym");
var submit = document.getElementById("submit");
var yourPw = document.getElementById("yourPw");


submit.addEventListener("click",function(e){
    var characters = char;
    (upperCaseBox.checked) ? characters += upperCase : '';
    (numBox.checked) ? characters += num : '';
    (symBox.checked) ? characters += sym : '';
    yourPw.value = password(charNum.value, characters);
});

function password(l,characters){
        var pwd = '';
    for(var i = 0; i<l; i++){
            pwd += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    alert(pwd);
}

function myFunction() {
    var x, text;
    x = document.getElementById("charNum").value;
    if (isNaN(x) || x < 8 || x > 100) {
      alert("Please enter a vlaue from 8 to 128.");
    } 
   
  }
