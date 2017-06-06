 function addElem(){
  //сreate form
  var wrap = document.getElementById('validField');
  var forms = document.createElement('form');
  var inputFir= document.createElement('input');
  var inputSec = document.createElement('input');
  var inputThr = document.createElement('input');
  var inputFour = document.createElement('input');

  wrap.appendChild(forms);
  forms.appendChild(inputFir);
  forms.appendChild(inputSec);
  forms.appendChild(inputThr);
  forms.appendChild(inputFour);

  // add attribute for input
  forms.setAttribute('name','login');
  forms.setAttribute('action','text');
  inputFir.setAttribute('type','text');
  inputSec.setAttribute('type','text');
  inputThr.setAttribute('type','text');
  inputFour.setAttribute('type','submit');
  inputFir.setAttribute('name','age');
  inputSec.setAttribute('name','username');
  inputThr.setAttribute('name','date');
  inputFour.setAttribute('value','Validate Me');

  //add placeholder for field
  inputFir.setAttribute('placeholder','Age');
  inputSec.setAttribute('placeholder','Username');
  inputThr.setAttribute('placeholder','dd/mm/yyyy');
};
addElem();

 //function of Validate form
 function validateMe(){

 //Validate field age -- start!
  var regV = /^\d+$/g;
  var ageField = document.querySelector('input[name=age]').value;
  var result = ageField.match(regV);
  if (ageField.length === 0 || ageField == 0 || Math.sign(ageField)== -1 || result === null){
    alert('Заповніть коректно поле age!');
    ageField = false;
  }else if (isNaN(ageField)){
    alert('Введіть число в поле age!');
    ageField = false;
  }
 //Validate field age -- end!

  //Validate field name -- start
  var regV2 = /^user_/;
  var nameField = document.querySelector('input[name=username]').value;
  var result2 = nameField.match(regV2);
  if (nameField.length === 0 || result2 == null ){
    alert('Заповніть поле name коректно!');
    nameField = false;
  }
  //Validate field name -- end

    //Validate field date -- start
  var regV3 = /(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d/;
  var dateField = document.querySelector('input[name=date]').value;
  var result3 = dateField.match(regV3);
  if (dateField.length === 0 || result3 === null){
    alert('Заповніть поле date коректно!');
    dateField = false;
  }
    //Validate field date -- end
 return dateField && nameField && ageField;
};

 function formRul(event){
  //canceling function of form
   document.querySelector('form').onsubmit= function (event){
     event.preventDefault();

   if (!validateMe()){
       alert('Заповніть форму правильно!');
     }
     else {
        alert('Валідація пройшла успішно!');
     }
 };
};
formRul();
