let template=document.getElementById('template')
console.log(template);
async function getData(){
    let myJSON=`https://dummyjson.com/products`
    let data=await window.fetch(myJSON)
    let response=await data.json()
    console.log(response);
    let products=response.products  
    console.log(products);
    let output=''
    for(let ele of products){
        console.log(ele.title);

        console.log(ele.thumbnail);
        output+=
        `
        <div>
        <img src="${ele.thumbnail}" alt="">
        <h1>Product Name: ${ele.title}</h1>
        <h1>Brand: ${ele.brand}</h1>
        <h1>Description: ${ele.description.slice(0,20)}...</h1>
        <h1>Amount: ${ele.price}$</h1>
        <h1>Discount: ${ele.discountPercentage}%</h1>
        <h1 ${(ele.rating>4.5)?"class=green":"class=red"}>Rating: ${ele.rating}/5</h1>
        <h1 ${(ele.stock>50)?"class=green":"class=red"}>Stock: ${ele.stock}nos</h1>
        </div>
        `
    }
    template.innerHTML=output
}
getData()