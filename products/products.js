class product {
    constructor(description, filename, height, price, quantity, rating, title, type, url, width) {
            this.description = description;
            this.filename = filename;
            this.height = height;
            this.price = price;
            this.quantity = quantity;
            this.rating = rating;
            this.title = title;
            this.type = type;
            this.url = url;
            this.width = width;
    }
}


const products = [];

async function getList() {
    return fetch('https://webschool-js-final-api.herokuapp.com/products ')
            .then(a => a.json())
}


async function main() {
    const list = await getList();

    list.forEach((e, i) => {
            products.push(products[i] = new product(e.description, e.filename, e.height, e.price, e.quantity, e.rating, e.title, e.type, e.url, e.width))
            
    })
    
    console.log(products.length)
    products.forEach((a, i) => {
    
    const img = document.createElement('img');
    const newDiv = document.createElement('div');
    const details = document.createElement('div');
    const fullDetails = document.createElement('div');
    const h1 = document.createElement('h1');

    h1.innerHTML = 'Costumers-List'

    img.src = "https://picsum.photos/seed/picsum/200/301";
    img.classList.add('img', 'hide');

    fullDetails.classList.add('fullDetails');
    fullDetails.id = `div${i+200}`;
    // fullDetails.appendChild(img);
    fullDetails.classList.add('hide');
    
    details.classList.add('details');
    details.id = `div${i}`;
    
    newDiv.classList.add('newDiv');
    newDiv.appendChild(details);
    newDiv.appendChild(fullDetails);
    newDiv.appendChild(img);
    
    newDiv.addEventListener('click', (event) => {
           console.log(event.target)
    })
    
    details.addEventListener('click', (event) => {
            $(event.target).siblings().toggleClass("hide");
    })
    
    fullDetails.addEventListener('click', (event) => {
            $(event.target).next().toggleClass("hide");
            $(event.target).toggleClass("hide");
    })

    img.addEventListener('click', (event) => {
            $(event.target).prev().toggleClass("hide");
            $(event.target).toggleClass("hide");
    })
    
    fullDetails.innerHTML =  ` ${a.description} <br/> quantity: ${a.quantity} <br/> type: ${a.type}`; 
    details.innerHTML =  `${i + 1}: ${a.title}, ${a.price}$ ${'&#9733'.repeat(a.rating)}`;
    document.querySelector("#box").appendChild(newDiv);
    });
}

main();



