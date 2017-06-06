
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
