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
                    new Calculate(target.dataset);
                }

            }
            if (target.className == 'filling__label' && burgerFilling.contains(target)) {
                console.warn('Срабатывает если filling__label');

                if(checkProduct.addArr(target.dataset)){
                    new Calculate(target.dataset);
                }
                
            }
            if (target.className == 'additional__label' && burgerAdditional.contains(target)) {
                console.warn('Срабатывает если filling__label');

                if(checkProduct.addArr(target.dataset)){
                    new Calculate(target.dataset);
                }

            }

            
        })
    }
}


class Calculate {
    constructor(dataParam, summLink = '.summ__number', caloriesLink = '.calories__number') {
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
        let sumNumber = document.querySelector(this.summLink);
        let caloriesNumber = document.querySelector(this.caloriesLink);

        let sumNum = Number(this._dataObject().price) + Number(sumNumber.innerHTML);
        let caloriesNum = Number(this._dataObject().calories) + Number(caloriesNumber.innerHTML);

        sumNumber.innerHTML = sumNum;
        caloriesNumber.innerHTML = caloriesNum;

    }
}


class PresenceObjcet {
    constructor() {
        this.arr = [];
        console.log(this.arr);
    }

    addArr(object) {

        if(this.arr.indexOf(object.type) == -1) {
            this.arr.push(object.type);
            return Boolean(true);
        }

    }

}




new Burger();




