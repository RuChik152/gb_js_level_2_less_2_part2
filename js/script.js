// let s = document.querySelector('.calories__number');

// let sum = Number();
// let calories = Number();

// let sizeBurger = document.querySelectorAll('.size__label');
// console.log(sizeBurger);
// sizeBurger.forEach((item) => item.addEventListener('click', function(){
//     let p = Number(item.dataset.price);
//     let c = Number(item.dataset.calories);
//     sum += p;
// }))





function size(){
    let objSize = {};
    let size = document.querySelectorAll('.size__label');
    size.forEach(item => item.addEventListener('click', function(){
        objSize.price = this.dataset.price;
        objSize.calories = this.dataset.calories;
        return objSize;
    }))

    
}

function showSize(){
    let a = size();
    return a;
}

let b = showSize();