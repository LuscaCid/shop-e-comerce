import { ApiConnectionProducts } from "./ApiConnectionProducts.js"
const app = new ApiConnectionProducts()
console.log('oi')
let id = 3
const addItemButton = document.querySelector("#add-product")
app.add(1)
app.add(2)
addItemButton.addEventListener('click',(event)=>{
    event.preventDefault()
    console.log('click')
    app.add(id)
    id++;
})
