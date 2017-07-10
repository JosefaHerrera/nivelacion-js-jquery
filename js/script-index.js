
$(document).ready( function(){

	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);
	renderActivities(activities);

});
//ETAPA UNO
//jQuery hide() Method , {$(selector).hide()} 
//El metodo hide() nos permite ocultar algun elemento.
$("#hide").ready(function(){
        $(".js-back").hide();
    });

//ETAPA DOS
//{$(selector).append(contenido, funcion(index,html))}
//append(); se encarga de añadir nuevos elementos.
 function printNews(){
 	$('#recetas').append("NUEVAS RECETAS");
}
printNews();
/*

//ETAPA TRES
* Función que se encarga de pintar TODAS las recetas que tengan
* marcado el atributo "highlighted" como TRUE
* forEach(); recorre los objetos de un arreglo
* Si la condición del paso 2 se cumple,
* manda a llamar la función renderRecipe pasándole como
* parámetro el objeto que cumplió la condición.
*/
function renderHighlightedRecipes(recipesArray) {
    console.log('Recipes: ', recipesArray);
    recipesArray.forEach(function(e){
        if (e.highlighted == true){
            renderRecipe(e);
        }
    })
};

/*

//ETAPA CUATRO
* Función que se encarga de pintar UNA recetas que tenga
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el
* archivo "templates/templates-recipe.html"
*/
function renderRecipe(recipe) {
    console.log('Voy a pintar la receta: ', recipe);
    $(".list-recipes").append(    "<a class='item-recipe' href='#'>" +
                                      "<span class='attribution'>" +
                                        "<span class='title-recipe'>" + recipe.title + "</span>" +
                                        "<span class='metadata-recipe'>" +
                                              "<span class='author-recipe'>" + recipe.source.name + " </span>" +
                                              "<span class='bookmarks-recipe'>" +
                                                   "<span class='icon-bookmark'></span>" +
                                              "</span>" +
                                        "</span>" +
                                    "</span>" +
                                    "<img src='img/recipes/640x800/" + recipe.name + ".jpg'>" +
                                "</a>");
};

	/* template-recipe.html

	<a class="item-recipe" href="#">
  <span class="attribution">
    <span class="title-recipe"> TITULO DE LA RECETA (ATRIBUTO "title" ) </span>
    <span class="metadata-recipe">
      <span class="author-recipe"> NOMBRE DEL AUTO DE LA RECETA (ATRIBUTO "source.name") </span>
      <span class="bookmarks-recipe">
        <span class="icon-bookmark"></span>
      </span>
    </span>
  </span>

  <img src="URL DE LA IMAGEN" />
</a>


	 */




/*

 //ETAPA CINCO
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activities) {
	console.log('Activities: ', activities);
	activities.forEach(function(e){
		if(d =! 0){
			$(".wrapper-message").css("display","none")
		}
	});
}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
	
}


