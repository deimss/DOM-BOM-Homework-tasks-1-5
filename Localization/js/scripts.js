function currentL(){
  var inpUa = document.querySelector('input[value=ua]');
  var inpRu = document.querySelector('input[value=ru]');
  var inpEng = document.querySelector('input[value=eng]');
  var currnetLang = localStorage.getItem('language');
  var myDiv = document.getElementById('fieldForText');
  if (currnetLang == null){
    alert('Виберіть мову!');
  }else {
      alert('Now, languages is : '+ currnetLang);
  }
  if (currnetLang == 'ua'){
    inpUa.setAttribute('checked','checked');
    myDiv.innerHTML = 'Привіт , username! Раді тебе бачити!';

  }else if (currnetLang == 'ru') {
    inpRu.setAttribute('checked','checked');
    myDiv.innerHTML = 'Привет, username! Раде тебя видеть!';
  }else if (currnetLang == 'eng'){
    inpEng.setAttribute('checked','checked');
    myDiv.innerHTML = 'Hi, username! Council to see you!';
  }
}
currentL();
 //change language ,depends on radio-button
function check (){
  var myDiv = document.getElementById('fieldForText');
  var inputCheck = document.getElementsByTagName('input');
  for (var i = 0; i < inputCheck.length; i++){
    inputCheck[i].onclick = function(){
      if (this.value == "ua") {
        var result = this.value;
      myDiv.innerHTML = 'Привіт , username! Раді тебе бачити!';
      alert('now language is: '+ result);
    }else if (this.value == "ru") {
      var result = this.value;
      myDiv.innerHTML = 'Привет, username! Раде тебя видеть!';
      alert('now language is: '+ result);
    }else {
    var result = this.value;
    myDiv.innerHTML = 'Hi, username! Council to see you!';
    alert('now language is: '+ result);
    }
        }
     };

};

 check();

 //add data to localStorage
 (function (){
   var myButton = document.getElementById('save');
   var inputCheck = document.getElementsByTagName('input');
      myButton.onclick = function(){
     for (var i = 0; i < inputCheck.length; i++){
       if (inputCheck[i].checked === true){
         localStorage.setItem("language", inputCheck[i].value);
         alert('Information saved');
       }
     }
    }
 }) ();
