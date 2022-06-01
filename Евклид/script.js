window.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: 'true',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });
},
);



const tabsBtn = document.querySelectorAll(".work__item");
const tabsItems = document.querySelectorAll(".work__item-content");

tabsBtn.forEach(function (item) {
    item.addEventListener("click", function () {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        if (!currentBtn.classList.contains('active')) {
            tabsBtn.forEach(function (item) {
                item.classList.remove('active');
            })

            tabsItems.forEach(function (item) {
                item.classList.remove('active');
            })

            currentBtn.classList.add('active');
            currentTab.classList.add('active');
        }

    })
})
document.querySelector('.work__item').click();



$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__burger,.header__nav').toggleClass('active');
        $('body').toggleClass('lock');
    });
});



document.getElementById('header__search-btn').onclick = function () {
    document.getElementById('header__search').classList.add('active');
    document.getElementById('header__search-close').classList.add('active');
}

document.getElementById('header__search-close').onclick = function () {
    document.getElementById('header__search').classList.remove('active');
    document.getElementById('header__search-close').classList.remove('active');
}

document.getElementById('header__search-adapt').onclick = function () {
    document.getElementById('header__search').classList.add('active');
    document.getElementById('header__search-close').classList.add('active');
}