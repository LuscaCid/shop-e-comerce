export class DataProducts{
    DataProd = []
    secctionProducts = document.querySelector('.secao-produtos')
    load(){
        
    }
    update(){
        
    }
    createSection(){
       const section = `
        <img class="product-img" src="" alt="">
        <div class="description">
            <h1 id="product-title">bone</h1>
            <p id="price">price</p>

        </div>
       
       `
        const element = document.createElement('div')
        element.className = 'product-card'
        element.innerHTML = section

    }
}

export class ApiConnectionProducts extends DataProducts { 

    getProducts(id){
        console.log('chegou no getproducts')
        const endpoint = `https://fakestoreapi.com/products/${id}` 
        return fetch(endpoint)
        .then(data => data.json())
        .then(({price, id, image, title})=>({
            price,
            id,
            image,
            title
        }))
    }

    async add(id){
        const product = await this.getProducts(id);
        console.log(product);
        this.DataProd.push(product)
        this.createSection(product)
        return product;
    }
}
