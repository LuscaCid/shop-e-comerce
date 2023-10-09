export class DataProducts{
    produtos = document.querySelectorAll('.product-card')
    secao = document.querySelector('.secao-produtos')
    constructor(){/**remover os produtos */
        this.produtos.forEach((produto)=>{
            produto.remove()
        })
    }

    DataProd = []
    secctionProducts = document.querySelector('.secao-produtos')
    load(){
        
    }
    update(elemento){
        this.secao.appendChild(elemento)
    }
    createSection(product){
       const section = `
       <img class="product-img" src="${product.image}" alt="">
       <div class="description">
           <h1 id="product-title">${product.title}</h1>
           <p id="price">R$${product.price}</p>
           <p id="category">${product.category}</p>
           <p id="rate">${product.rating.rate} stars</p>
       </div>
       
       `
        const element = document.createElement('div')
        element.className = 'product-card'
        element.innerHTML = section
        return element
    }
}

export class ApiConnectionProducts extends DataProducts { 

    constructor(){
        super()
    }
    getProducts(id){
        console.log('chegou no getproducts')
        const endpoint = `https://fakestoreapi.com/products/${id}` 
        return fetch(endpoint)
        .then(data => data.json())
        .then(({price, id, image, title,rating,description, category})=>({
            price,
            id,
            image,
            title,
            rating,
            description,
            category
        }))
    }

    async add(id){
        const product = await this.getProducts(id);
        console.log(product);
        this.DataProd.push(product)
        const elemento = this.createSection(product)
        this.update(elemento)
        return product;
    }
}
