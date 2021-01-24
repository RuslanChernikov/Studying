'use strict';
// 1)
function showThis (a,b){
    console.log(this);
        function sum() {
            console.log(this);
            return a+b;
        }

        console.log(sum());
}

showThis();

// 2)
const obj = {
    a: 20,
    b: 15,
    sum: function () {
        const num = function() {
            console.log(this);
        };
        num();
        console.log(this);
    }
};

obj.sum();

// 3)

function User (name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log('Hello' + this.name);
    };
}
    let ivan = new User('Ivan', '23');

// 4) call & apply

function sayName(surname) {
     console.log(this);
     console.log(this.name + surname);
}

const user = {
    name: 'John'
};

sayName.call(user, 'Smith');
sayName.apply(user, ['Smith']);

// bind

function count(num) {
   return this*num; 
}

const double = count.bind(2);

console.log(double(5));

// 5) Контекст вызова в обработчиках событий

btn.addEventListener('ckick', function () {
    console.log(this);                      // Здесь this покажет непосредственно объект на котором событие (button), 
                                            //но только при классическом объявлении функции. Со стрелочной будет undefined.
});

// 1) обычная функция this=window, но если use strict - undefined

// 2) Если мы используем метод внутри объекта, то контекст вызова всегда будет ссылаться на этот объект. 
//    Контекст у методов объекта - сам объект 

// 3) This в контрукторах  и классах - это новый экземпляр объекта

// 4) Ручная привязка this: call, apply, bind.

let obj2 = {
    num: 5,
    sayNumber: function() {
        const say = () => {         // стрелочная функция берёт контекст вызова родителя. В данном случае объекта.
            console.log(this);
        };
        say();
    }
};

obj2.sayNumber();