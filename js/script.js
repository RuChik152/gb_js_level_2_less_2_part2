"use strict";

class Burger {
    constructor(container = '.container', burgerSize = '.burger__size', burgerFilling = '.burger__filling', burgerAdditional = '.burger__additional') {
        this.container = container;
        this.burgerSize = burgerSize;
        this.burgerFilling = burgerFilling;
        this.burgerAdditional = burgerAdditional;
        this.main();
    }

    main() {

        let checkProduct = new PresenceObjcet();

        let container = document.querySelector(this.container);


        let burgerSize = document.querySelector(this.burgerSize);
        let burgerFilling = document.querySelector(this.burgerFilling);
        let burgerAdditional = document.querySelector(this.burgerAdditional);

        container.addEventListener('click', function (e) {
            let target = e.target;
            console.log(target);

            if (target.className == 'size__label' && burgerSize.contains(target)) {
                console.warn('Срабатывает если size__label');

                if(checkProduct.addArr(target.dataset)){
                    new Calculate(target.dataset, 'add');
                }

            }
            if (target.className == 'filling__label' && burgerFilling.contains(target)) {
                console.warn('Срабатывает если filling__label');

                if(checkProduct.addArr(target.dataset)){
                    new Calculate(target.dataset, 'add');
                }
                
            }
            if (target.className == 'additional__label' && burgerAdditional.contains(target)) {
                console.warn('Срабатывает если filling__label');

                if(checkProduct.addArr(target.dataset)){
                    new Calculate(target.dataset, 'add');
                }

            }

            
        })
    }
}


class Calculate {
    constructor(dataParam, scenario, summLink = '.summ__number', caloriesLink = '.calories__number') {
        this.scenario = scenario;
        this.summLink = summLink;
        this.caloriesLink = caloriesLink;
        this.dataParam = dataParam;
        this.object = {};
        this._dataObject();
        this.calc();
    }

    _dataObject() {
        this.object = {
            price: this.dataParam.price,
            calories: this.dataParam.calories,
            type: this.dataParam.type
        };
        return this.object;
    }

    calc() {
        if(this.scenario == 'add'){
            let sumNumber = document.querySelector(this.summLink);
            let caloriesNumber = document.querySelector(this.caloriesLink);
    
            let sumNum = Number(this._dataObject().price) + Number(sumNumber.innerHTML);
            let caloriesNum = Number(this._dataObject().calories) + Number(caloriesNumber.innerHTML);
    
            sumNumber.innerHTML = sumNum;
            caloriesNumber.innerHTML = caloriesNum;
        }

        if(this.scenario == 'delete') {
            console.log('delete');

            let sumNumber = document.querySelector(this.summLink);
            let caloriesNumber = document.querySelector(this.caloriesLink);

            sumNumber.innerHTML = Number(sumNumber.innerHTML) - Number(this._dataObject().price);
            caloriesNumber.innerHTML = Number(caloriesNumber.innerHTML) - Number(this._dataObject().calories);

        }

    }
}


class PresenceObjcet {
    constructor() {
        this.arr = [];
        console.log(this.arr);
    }

    addArr(object) {

        console.log(object);

        if(!this.arr.includes(object.type)) {
            this.arr.push(object.type);
            return Boolean(true);
        }

        if(this.arr.includes(object.type)) {
            let index = this.arr.indexOf(object.type);
            this.arr.splice(index, 1);
            new Calculate(object, 'delete');
            return Boolean(false);
        }

    }

}




new Burger();




