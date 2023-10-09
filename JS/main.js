import { ApiConnectionProducts } from "./ApiConnectionProducts.js"
const app = new ApiConnectionProducts()
console.log('oi')
let id = 3
const addItemButton = document.querySelector("#add-product")
const inputSearch = document.querySelector('.input-wrapper input')
app.add(1)
app.add(2)
inputSearch.addEventListener('keydown', displayOptions);


addItemButton.addEventListener('click',(event)=>{
    event.preventDefault()
    console.log('click')
    app.add(id)
    id++;
})

function passageOfEachProductInDataBase(){
    let isExists = true
    listOfItems = []
    while (isExists){
        let actualString = inputSearch.value
        let x = 1
        const actualProduct = app.viewProductsInput(x)
        if(actualProduct){
            if(actualString.includes(actualProduct.tittle) ){
                listOfItems.push(actualProduct)
            } else isExists = false; 

        }

    }
}


function displayOptions(){
    
    
    inputSearch.value
}