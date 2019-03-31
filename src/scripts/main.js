const buildToDom = document.querySelector("#display-container")

fetch("http://localhost:8088/foods")
.then(foods => foods.json())
.then(parsedFoods => {
    parsedFoods.forEach(foodList => {
        fetch(`https://world.openfoodfacts.org/api/v0/product/${foodList.barcode}.json`)
            .then(response => response.json())
            .then(productInfo => {
                // Use it here
                console.log(productInfo)
                const blockToDom = `<div class="listDom">
                    <h2>${foodList.name} </h2>
                    <h4> ${foodList.category}</h4>
                        <h4> ${foodList.name}</h4>
                        <p> ${productInfo.product.ingredients_text}</p>
                        <p> Country of Origin: ${ productInfo.product.countries}</p>
                        <p> ${productInfo.product.nutriments.energy + "calories"}</p>
                        <p> ${productInfo.product.nutriments.fat + "grams of fat"}</p>
                        <p> ${productInfo.product.nutriments.sugars + "grams of sugar"}</p>
                    </div>
                    `
            buildToDom.innerHTML += blockToDom
            })
        });
    })
    // Ingredients
    // Country of origin
    // Calories per serving
    // Fat per serving
    // Sugar per serving