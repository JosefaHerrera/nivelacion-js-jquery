//jQuery hide() Method , {$(selector).hide()}
//El metodo hide() nos permite ocultar algun elemento.
$("#hide").ready(function(){
        $(".js-menu").hide();
    });

//Imprime un mensaje en la consola cuando el documento HTML este listo
$(document).ready(function(){
	console.log("pagina cargada");
});

//ETAPA 8
//En esta etapa tienes que completar la navegación de esta página, la cual funciona con pestañas.
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
//ETAPA 9
//En esta etapa tienes que señalar la navegación.
	$(".js-show-make").click(function(){
		//agregar clase
			$(".js-show-make").addClass('active');
		//remover clase
		$(".js-show-recipe").removeClass('active');
      });

	$(".js-show-recipe").click(function(){
		//agregar clase
		$(".js-show-recipe").addClass('active');
      });
  
  };

  recipebtn();

