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





// function size(){
//     let objSize = {};
//     let size = document.querySelectorAll('.size__label');
//     size.forEach(item => item.addEventListener('click', function(){
//         objSize.price = this.dataset.price;
//         objSize.calories = this.dataset.calories;
//         return objSize;
//     }))


// }

// function showSize(){
//     let a = size();
//     return a;
// }

// let b = showSize();

// let burg = [];

// let container = document.querySelector('.container');

// let burgerSize = document.querySelector('.burger__size');
// let burgerFilling = document.querySelector('.burger__filling');
// let burgerAdditional = document.querySelector('.burger__additional');

// container.addEventListener('click', function (e) {
//     let target = e.target;
//     console.log(target);
//     //debugger;
//     if (target.className == 'size__label' && burgerSize.contains(target)) {
//         console.warn('Срабатывает если size__label');
//         let size = target.dataset;

//     }
//     if (target.className == 'filling__label' && burgerFilling.contains(target)) {
//         console.warn('Срабатывает если filling__label');
//         let filling = target.dataset;
//     }
//     if (target.className == 'additional__label' && burgerAdditional.contains(target)) {
//         console.warn('Срабатывает если filling__label');
//     }

//     console.log(burg);
// })


class Burger {
    constructor(price = 0, calories = 0, container = '.container', burgerSize = '.burger__size', burgerFilling = '.burger__filling', burgerAdditional = '.burger__additional', summLink = '.summ__number', caloriesLink = '.calories__number') {
        this.price = price;
        this.calories = calories;
        this.container = container;
        this.burgerSize = burgerSize;
        this.burgerFilling = burgerFilling;
        this.burgerAdditional = burgerAdditional;
        this.summLink = summLink;
        this.caloriesLink = caloriesLink;
        this.main();
    }


    main() {
        

        let arr = [];

        let container = document.querySelector(this.container);

        let sumNumber = document.querySelector(this.summLink);
        sumNumber.innerHTML = 0;


        let caloriesNumber = document.querySelector(this.caloriesLink);
        caloriesNumber.innerHTML = 0;

        let burgerSize = document.querySelector(this.burgerSize);
        let burgerFilling = document.querySelector(this.burgerFilling);
        let burgerAdditional = document.querySelector(this.burgerAdditional);

        container.addEventListener('click', function (e) {
            let target = e.target;
            console.log(target);
            //debugger;
            if (target.className == 'size__label' && burgerSize.contains(target)) {
                console.warn('Срабатывает если size__label');
                //console.log(target.dataset);
                // let size = new Object(target.dataset);
                // arr.push(size);
                
                let sumNum = Number(target.dataset.price) + Number(sumNumber.innerHTML);                
                sumNumber.innerHTML = sumNum;

                let caloriesNum = Number(target.dataset.calories) + Number(caloriesNumber.innerHTML);
                caloriesNumber.innerHTML = caloriesNum;

            }
            if (target.className == 'filling__label' && burgerFilling.contains(target)) {
                console.warn('Срабатывает если filling__label');
                // let filling = new Object(target.dataset);
                // arr.push(filling);

                let sumNum = Number(target.dataset.price) + Number(sumNumber.innerHTML);                
                sumNumber.innerHTML = sumNum;

                let caloriesNum = Number(target.dataset.calories) + Number(caloriesNumber.innerHTML);
                caloriesNumber.innerHTML = caloriesNum;

            }
            if (target.className == 'additional__label' && burgerAdditional.contains(target)) {
                console.warn('Срабатывает если filling__label');
                // let additional = new Object(target.dataset);
                // arr.push(additional);

                let sumNum = Number(target.dataset.price) + Number(sumNumber.innerHTML);                
                sumNumber.innerHTML = sumNum;

                let caloriesNum = Number(target.dataset.calories) + Number(caloriesNumber.innerHTML);
                caloriesNumber.innerHTML = caloriesNum;
                
            }

            //console.log(arr);
        })
    }
}






new Burger();