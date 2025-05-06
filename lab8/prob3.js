

// Write an IIFE that fetch recipes from https://dummyjson.com/recipes and print to the console a list
// of recipe names.


fetch("https://dummyjson.com/recipes").then(res => res.json())
    .then(data => {
        console.log(data.recipes.map(re => re.name))
    })

