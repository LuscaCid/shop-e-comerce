import { ApiConnectionProducts } from "./ApiConnectionProducts.js"
const app = new ApiConnectionProducts()
console.log('oi')
let id = 3
const addItemButton = document.querySelector("#add-product")
const inputSearch = document.querySelector('.input-wrapper input')
app.add(1)
app.add(2)
inputSearch.addEventListener('keyup', displayOptions);


addItemButton.addEventListener('click',(event)=>{
    event.preventDefault()
    console.log('click')
    app.add(id)
    id++;
})

function passageOfEachProductInDataBase(){
    let isExists = true
    let listOfItems = []
    listOfItems.push('item1')
    let actualString = inputSearch.value
    while (isExists){
    
        let x = 4
        x++
        const actualProduct =  app.viewProductsInput(x)
        console.log(actualProduct)
        if(actualProduct){
            if(actualString.includes(String(actualProduct.title)) ){
                listOfItems.push(actualProduct)
                console.log(listOfItems)
            } else{
                let indexNot = listOfItems.indexOf(!listOfItems.includes(actualString))
                listOfItems.slice(indexNot, 1)
            }
        } else return
    }
}


function displayOptions(keycode){
    const letter = keycode
    console.log(inputSearch.value)
    passageOfEachProductInDataBase()
    
}