class person {
    constructor(id, fn, ln, company, country, created_at, email) {
            this.company = company;
            this.country = country;
            this.created_at = created_at;
            this.email = email;
            this.ln = ln;
            this.fn = fn;
            this.id = id;
    }
}


const persons = [];
async function getList() {
    return fetch('https://webschool-js-final-api.herokuapp.com/customers')
            .then(a => a.json())
}

async function main() {
    const list = await getList();

    list.forEach((e, i) => {
            persons.push(persons[i] = new person(e.id, e.first, e.last, e.company, e.country, e.created_at, e.email))
            
    })
    
    console.log(persons.length)
    persons.forEach((a, i) => {
    
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
    
    fullDetails.innerHTML =  `Country: ${a.country} <br/> Company: ${a.company} <br/> Created at: ${a.created_at}`; //i + 1 + " " + a.fn + " " + a.ln;
    details.innerHTML =  `${i + 1}: ${a.fn}  ${a.ln}, ${a.email}`; //i + 1 + " " + a.fn + " " + a.ln;
    document.querySelector("#box").appendChild(newDiv);
    });
}

main();

async function createMainDiv() {
}



createMainDiv()


