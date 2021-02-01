document.addEventListener('DOMContentLoaded', () => {
 //Tabs
const tabs = document.querySelectorAll('.tabheader__item'),
      tabsContent = document.querySelectorAll('.tabcontent'),
      tabsParent = document.querySelector('.tabheader__items');

      function hideTabContent()  {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });
        

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }

    function showTabContent(i=0) { // значение i по умолчанию, если забудем его указать при вызове функции
    
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active'); 
    }


    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (event) => {
        const target=event.target;

        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target==item) {
                hideTabContent();
                showTabContent(i);
                }
            });

        }
    });

    //Timer

    const deadline = '2021-01-31';

function getTimeRemaining (endtime) {
    const t= Date.parse(endtime) - Date.parse(new Date()),
    days = Math.floor( t/(1000*60*60*24)),
    hours = Math.floor((t/(1000*60*60)) %24 ), //остаток часов от суток
    minutes = Math.floor((t/1000/60) %60),
    seconds = Math.floor((t/1000)%60);

    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };

}

function getZero(num) {

    if(num>=0 && num<10) {
        return `0${num}`;
    } else {
        return num;
    }
}

function setClock (selector, endtime) {

    const timer = document.querySelector('.timer'),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),

            timeInterval = setInterval(updateClock, 1000);

            updateClock();

        function updateClock() {
            const t=getTimeRemaining(endtime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if(t.total <=0) {
                clearInterval(timeInterval);
            }
        }    
}

setClock('.timer', deadline);

//Modal window


const modal=document.querySelector('.modal'),
      modalTrigger=document.querySelectorAll('[data-modal]'),
      modalCloseBtn=document.querySelector('[data-close]');

function showModalWindow() {

    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';

}

function hideModalWindow() {
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
}


    modalTrigger.forEach((item, i)=> {
        item.addEventListener('click', ()=> {
            showModalWindow();
        });
        
    });



modal.addEventListener('click', (e)=> {
    if(e.target===modal || e.target.getAttribute('data-close') == '') {
        hideModalWindow();
    }

    document.addEventListener('keydown' , (e)=> {
        if(e.code==='Escape') {
            hideModalWindow();
        }
    });
});

setTimeout(showModalWindow, 50000);

function showModalScroll() {

    if(window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
        showModalWindow();
window.removeEventListener('scroll', showModalScroll);
    }

}

window.addEventListener('scroll', showModalScroll);


// Используем классы для карточек

class MenuCard {
    constructor(src, alt, title, descr, price, parentSelector, ...classes) {
        this.src=src;
        this.alt=alt;
        this.title=title;
        this.descr=descr;
        this.price=price;
        this.parent = document.querySelector(parentSelector);
        this.classes=classes;

    }

    render(){
        const element=document.createElement('div');
        if (this.classes.length === 0) {
            element.classList.add('menu__item');
        } else {
            this.classes.forEach(className => element.classList.add(className));
        }
        element.innerHTML= `
        
                    <img src=${this.src} alt=${this.alt}>
                    <h3 class="menu__item-subtitle">${this.title}</h3>
                    <div class="menu__item-descr">${this.descr}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                    </div>
                
        `;

        this.parent.append(element);
    }
}

new MenuCard(
    "img/tabs/vegy.jpg",
    "vegy",
    'Меню "Фитнес"',
    'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
    229,
    '.menu .container'

).render();

new MenuCard(
    "img/tabs/elite.jpg",
    "elite",
    'Меню “Премиум”',
    'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
    550,
    '.menu .container'
).render();

new MenuCard(
    "img/tabs/post.jpg",
    "post",
    'Меню "Постное"',
    'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков',
    430,
    '.menu .container'
).render();

// Form

const forms = document.querySelectorAll('form');
        let pername=document.querySelectorAll('.input_name');
        let perphone=document.querySelectorAll('.input_phone');
let dataObj = {};



const message = {
    loading: 'img/spinner.svg',
    succsess: 'Спасибо! Мы скоро с Вами свяжемся!',
    failure: 'Что-то пошло не так'
};

forms.forEach(items => {
    postData(items);
});

function postData(form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        pername.forEach((item) => {
            dataObj.name=item.value;
        });
    
        perphone.forEach((item) => {
            dataObj.phone=item.value;
        });

        console.log(dataObj);

        const statusMessage = document.createElement('img');
        statusMessage.src=message.loading;    
        statusMessage.style.cssText = `
            display: block;
            margin: 0 auto;
        `;
            
            form.insertAdjacentElement('afterend', statusMessage); //вставляет элемент в конце

        const request = new XMLHttpRequest();

            request.open('POST', 'server.php');
            // метод отправки FormData
               // request.setRequestHeader('Content-type', 'multipart/form-data'); // если отправляем данные в формате
               // FormData, то заголовок не нужен, он создаётся автоматически. Для JSON заголовок нужен

            // const formData = new FormData(form);

            // request.send(formData);


            // Метод отправки JSON

request.setRequestHeader('Content-type', 'application/json');

const json=JSON.stringify(dataObj);
        request.send(json);


            request.addEventListener('load', () => {
                if (request.status === 200) {
                   console.log(request.response);
                    showThanksModal(message.succsess);
                    form.reset();
                
                        statusMessage.remove();

                } else {
                    showThanksModal(message.failure);
                }
            });
    });

}

    function showThanksModal(message) {
        const prevModalDialog = document.querySelector('.modal__dialog');

        prevModalDialog.classList.add('hide');
        showModalWindow();

        const thanksModal = document.createElement('div');
            thanksModal.classList.add('modal__dialog');
            thanksModal.innerHTML = `
            <div class="modal__content">
                <div class="modal__close" data-close>×</div>
                <div class="modal__title">${message}</div>
            </div>
            `;

            document.querySelector('.modal').append(thanksModal);

            setTimeout(() => {
                thanksModal.remove();
                prevModalDialog.classList.add('show');
                prevModalDialog.classList.remove('hide');
                hideModalWindow();
            }, 4000);
    }

});