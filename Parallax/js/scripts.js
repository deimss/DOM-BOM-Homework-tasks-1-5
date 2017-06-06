window.addEventListener('scroll', function (e) {
  var $parallax = document.getElementById('parallax');
  var posY = document.body.scrollTop * (-0.4);
  $parallax.style.backgroundPosition = '0px '+posY+'px';
})
