(function (){
   var myDiv = document.getElementById('osField');
   var i = navigator.platform;
   if (i == "Win32" || i == "Win16" || i == "WinCE") {
     myDiv.innerHTML = "Download Windows version of our app."
   } else if (i == "MacIntel" || i == "Mac68K" || i == "Mac68K"){
     myDiv.innerHTML = " Download MacOS version of our app."
   }
 })();
