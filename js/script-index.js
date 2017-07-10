
$(document).ready( function(){

	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);

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
            renderRecipe();
        }
    })
};

/*
* Función que se encarga de pintar UNA recetas que tenga
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el
* archivo "templates/templates-recipe.html"
*/
function renderRecipe(recipe) {
	console.log('Voy a pintar la receta: ', recipe);
}



/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
	console.log('Activities: ', activitiesArray);
}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
	
}


