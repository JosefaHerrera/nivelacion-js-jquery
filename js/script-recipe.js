//jQuery hide() Method , {$(selector).hide()}
//El metodo hide() nos permite ocultar algun elemento.
$("#hide").ready(function(){
        $(".js-menu").hide();
    });

//Imprime un mensaje en la consola cuando el documento HTML este listo
$(document).ready(function(){
	console.log("pagina cargada");
});


 function recipebtn(){
      	$(".js-show-recipe").click(function(){
    //remover clase make
 		$(".page.recipe").removeClass('make');
 		//$(".page.recipe").css('color','white');
  	});
    //agregar clase make 
      	$(".js-show-make").click(function(){
    		$(".page.recipe").addClass('make');
    		//$(".page.recipe").css('color','white');
      });
  
  };

  recipebtn();