
var onClick = function (e) {
	var $el = e.target;

  e.stopPropagation();

  $el.style.backgroundColor = 'yellow';
	alert('CLICK!');
};

// document.body.onclick = onClick;
 document.getElementById('box1').onclick = onClick;
 document.getElementById('box2').onclick = onClick;
 document.getElementById('box3').onclick = onClick;


  document.getElementById('myA').onclick = function (e){
    e.preventDefault();
 };
