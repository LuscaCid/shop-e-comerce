import { ApiConnectionProducts } from "./ApiConnectionProducts.js"
const app = new ApiConnectionProducts()
console.log('oi')
const addItemButton = document.querySelector("#add-product")

addItemButton.addEventListener('click',()=>{
    
})
app.add(2)
app.add(5)
app.add(3)
app.add(13)
app.add(15)