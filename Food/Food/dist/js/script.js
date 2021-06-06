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
        if (num >=0 && num < 10){
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
    function updateClock(selector, endTime){
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
    const timerId = setInterval(updateClock, 1000,".timer", deadline);
    // setClock(".timer", deadline);    
});