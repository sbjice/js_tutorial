"use strict";

document.addEventListener("DOMContentLoaded", () => { // create event listener
    // Tabs
    const tabs = document.querySelectorAll(".tabheader__item"), // getting all tabs
        tabsContent = document.querySelectorAll(".tabcontent"), // getting tabs content
        tabsParent = document.querySelector(".tabheader__items"); // tabs parent

    function hideTabContent() { // hide tabs content
        tabsContent.forEach(item => {
            // is not used in real project, 
            //real classes should be added to css file, and here add/remove should take place
            item.style.display = "none"; // hide tabs content

        });
        tabs.forEach(tab => {
            tab.classList.remove("tabheader__item_active"); // make tabs inactive,'.' is extra because classes processed
        });
    }

    function showTabContent(tabNumber = 0) { // shows content of Tab with given index 
        tabsContent[tabNumber].style.display = "block";
        tabs[tabNumber].classList.add("tabheader__item_active"); // makes corresponding tab active
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener("click", (event) => {
        const target = event.target;
        if (target && target.classList.contains("tabheader__item")) { // target is necessary to detect event itself
            tabs.forEach((tab, i) => { // necessary for determining which element was clicked
                if (tab == target) {
                    hideTabContent(); // necessary for hiding all tabs other than selected
                    showTabContent(i);
                }
            });
        }
    });

    // Timer

    const deadline = "2021-07-01";

    function getTimeRemaining(endTime) {
        const t = Date.parse(endTime) - Date.parse(new Date()),
            days = Math.floor(t / (1000 * 60 * 60 * 24)),
            hours = Math.floor((t / (1000 * 60 * 60)) % 24),
            minutes = Math.floor((t / (1000 * 60)) % 60),
            seconds = Math.floor((t / (1000)) % 60);
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function pasteZero(num) {
        if (num >= 0 && num < 10) {
            num = '0' + num;
        }
        return num;
    }

    // function setClock(selector, endTime) {
    //     const timer = document.querySelector(selector),
    //         days = timer.querySelector("#days"),
    //         hours = timer.querySelector("#days"),
    //         minutes = timer.querySelector("#minutes"),
    //         seconds = timer.querySelector("#seconds"),
    //         timerId = setInterval(updateClock, 1000);

    //     updateClock();

    //     function updateClock(){
    //         const currentTime = getTimeRemaining(endTime);
    //             days.innerHTML = pasteZero(currentTime.days);
    //             hours.innerHTML = pasteZero(currentTime.hours);
    //             minutes.innerHTML = pasteZero(currentTime.minutes);
    //             seconds.innerHTML = pasteZero(currentTime.seconds);
    //         if (currentTime.total <= 0) {
    //             clearInterval(timerId);
    //         }
    //     }

    // }
    function updateClock(selector, endTime) {
        const timer = document.querySelector(selector),
            days = timer.querySelector("#days"),
            hours = timer.querySelector("#days"),
            minutes = timer.querySelector("#minutes"),
            seconds = timer.querySelector("#seconds");

        const currentTime = getTimeRemaining(endTime);
        if (currentTime.total <= 0) {
            clearInterval(timerId);
        } else {
            days.innerHTML = pasteZero(currentTime.days);
            hours.innerHTML = pasteZero(currentTime.hours);
            minutes.innerHTML = pasteZero(currentTime.minutes);
            seconds.innerHTML = pasteZero(currentTime.seconds);
        }
    }
    updateClock(".timer", deadline);
    const timerId = setInterval(updateClock, 1000, ".timer", deadline);

    // Modal
    const modalOpenButtons = document.querySelectorAll('[data-modal'),
        modalCloseButton = document.querySelector('[data-close]'),
        modalWindow = document.querySelector('.modal');
    // console.log(modalOpenButtons, modalCloseButton, modalWindow);


    function hideModal() {
        modalWindow.style.display = "none";
        document.body.style.overflow = "visible";
    }

    function showModal() {
        // if classes are in css file can be done by adding/removing show/hide classes
        modalWindow.style.display = "block";
        document.body.style.overflow = "hidden";
        modalWindow.style.overflow = "hidden";
        clearInterval(modalOpenTimer);
    }
    // show modal on buttons click
    modalOpenButtons.forEach(btn => {
        btn.addEventListener("click", showModal);
    });

    modalCloseButton.addEventListener("click", hideModal);

    // close modal window on click outside modal
    modalWindow.addEventListener("click", (event) => {
        if (event.target === modalWindow) {
            hideModal();
        }
    });

    // close modal window on Escape press
    document.addEventListener("keydown", (e) => {
        // console.log(e.code);
        if (modalWindow.style.display == "block" && e.code === "Escape") {
            hideModal();
        }
    });

    const modalOpenTimer = setTimeout(showModal, 3000);

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            showModal();
            window.removeEventListener("scroll", showModalByScroll);
        }
    }

    window.addEventListener("scroll", showModalByScroll);

    class MenuType {
        constructor(alt, subtitle, descr, price, parent, ...classes) {
            this.alt = alt;
            this.subtitle = subtitle;
            this.descr = descr;
            this.img = alt + ".jpg";
            this.price = price;
            this.parent = document.querySelector(parent);
            this.classes = classes;
            this.renderElement();
        }
        renderElement() {
            const element = document.createElement("div");
            if (!this.classes.length){
                this.classes = ["menu__item"];
            }
            this.classes.forEach(className => element.classList.add(className));
            element.innerHTML = `            
                <img src="img/tabs/${this.alt}.jpg" alt="${this.alt}">
                <h3 class="menu__item-subtitle">${this.subtitle}</h3>
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
    // can be done without creating const variables
    const vegy = new MenuType("vegy", 'Меню "Фитнес"',
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        229, ".menu__field > div:nth-child(1)");

    const elite = new MenuType("elite", 'Меню “Премиум”',
        'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
        550, ".menu__field > div:nth-child(1)", "menu__item");

    const post = new MenuType("post", 'Меню "Постное"',
        'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
        430, ".menu__field > div:nth-child(1)", "menu__item");

});


// function showThis(a, b){
//     console.log(this);
//     function sum() {
//         console.log(this);
//         return this.a + this.b;
//     }
//     console.log(sum());
// }
// showThis(9, 3);