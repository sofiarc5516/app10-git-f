// JavaScript Document
$(document).ready(function(e){
  document.addEventListener("deviceready",function(){
      $('#sonar').tap(function(){
		  navigator.notification.beep(2);
	  }); //tap sonar
	  $('#vibrar').tap(function(){
		  navigator.notification.vibrate(2000);
	  }); // tap vibrar 
	  $('#datos').on('click', function(){
		  navigator.notification.confirm("Autor: Gabriela Rosales Morales 4° F Desarrolla Aplicaiones Móviles Profesor: José Antonio Gómmez Hernández Tema: Tutotial Daw");
	  });
  },false); // cierre deviceready
}); //cierre del ready 