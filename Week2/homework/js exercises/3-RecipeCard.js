//DECLARE A VARIABLE THAT HOLDS AN OBJECT (YOUR MEAL RECIPE)
//GIVE THE OBJECT 3 PROPERTIES:
//A TITLE(STRING), A SERVINGS(NUMBER), 
//AND AN INGREDIENTS (ARRAY OF STRINGS) PROPERTY.

const mySpecialRecipe = {}

mySpecialRecipe.mealname = "Vla",
mySpecialRecipe.serves = 3,
mySpecialRecipe.ingredients = ["1 lt. milk", "200 gr. sugar", "1 banana", "20 gr. starch"]


//LOG EACH PROPERTY OUT SEPARATELY, USING A LOOP(FOR, WHILE OR DO/WHILE)

for(const attr in mySpecialRecipe) {
	console.log(mySpecialRecipe[attr]);
}
