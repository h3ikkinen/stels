VANTA.GLOBE({
    el: "#intro",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: '#D9043D',
    backgroundColor: '#08090D'
});
let animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll(params) {
        for ( let i = 0; i < animItems.length; i++) {
            const animItem = animItems[i];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;

            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_active');
            } else {
                if (!animItem.classList.contains('_anim-no-hide')) {
                    animItem.classList.remove('_active');
                }

            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
              scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
              scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft};
    }
    setTimeout(() => {
        animOnScroll();
    }, 500)
   
}


// tabs init

const tabs1 = document.querySelectorAll('.tabheader__item'),
      tabsContent1 = document.querySelectorAll('.tabcontent'),
      tabsParent1 = document.querySelector('.tabheader__items'),
      tabs2 = document.querySelectorAll('.tabheader__item_2'),
      tabsContent2 = document.querySelectorAll('.tabcontent_2'),
      tabsParent2 = document.querySelector('.tabheader__items_2'),
      tabs3 = document.querySelectorAll('.tabheader__item_3'),
      tabsContent3 = document.querySelectorAll('.tabcontent_3'),
      tabsParent3 = document.querySelector('.tabheader__items_3');

function selectTabs(tabs, tabsContent, tabsParent) {
    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }
    // параметры по умолчанию 
    function showTabContent(i = 0) { // 0 - параметр по умолчанию
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();

    showTabContent();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains('tabheader__item') || target.classList.contains('tabheader__item_2') || target.classList.contains('tabheader__item_3')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
}
//1
selectTabs(tabs1, tabsContent1, tabsParent1);
tabsParent1.addEventListener('click', selectTabs);

// 2
selectTabs(tabs2, tabsContent2, tabsParent2);
tabsParent2.addEventListener('click', selectTabs);

// //3 
selectTabs(tabs3, tabsContent3, tabsParent3);
tabsParent3.addEventListener('click', selectTabs);


// slider 
var mySwiper = new Swiper('.models__slider', {
    // Optional parameters
    // direction: 'vertical',
    // loop: true,
    spaceBetween: 10,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
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
// Бургер 
// function burgerMenu(selector) {
//     let menu = $(selector);
//     let button = menu.find('.burger-menu_button', '.burger-menu_lines');
//     let links = menu.find('.burger-menu_link');
//     let overlay = menu.find('.burger-menu_overlay');
    
//     button.on('click', (e) => {
//       e.preventDefault();
//       toggleMenu();
//     });
    
//     links.on('click', () => toggleMenu());
//     overlay.on('click', () => toggleMenu());
    
//     function toggleMenu(){
//       menu.toggleClass('burger-menu_active');
      
//       if (menu.hasClass('burger-menu_active')) {
//         $('body').css('overlow', 'hidden');
//       } else {
//         $('body').css('overlow', 'visible');
//       }
//     }
//   }
  
//   burgerMenu('.burger-menu');

  var linkNav = document.querySelectorAll('[href^="#"]'), //выбираем все ссылки к якорю на странице
  V = 0.25;  // скорость, может иметь дробное значение через точку (чем меньше значение - тем больше скорость)
for (var i = 0; i < linkNav.length; i++) {
  linkNav[i].addEventListener('click', function(e) { //по клику на ссылку
      e.preventDefault(); //отменяем стандартное поведение
      var w = window.pageYOffset,  // производим прокрутка прокрутка
          hash = this.href.replace(/[^#]*(.*)/, '$1');  // к id элемента, к которому нужно перейти
      t = document.querySelector(hash).getBoundingClientRect().top,  // отступ от окна браузера до id
          start = null;
      requestAnimationFrame(step);  // подробнее про функцию анимации [developer.mozilla.org]
      function step(time) {
          if (start === null) start = time;
          var progress = time - start,
              r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
          window.scrollTo(0,r);
          if (r != w + t) {
              requestAnimationFrame(step)
          } else {
              location.hash = hash  // URL с хэшем
          }
      }
  }, false);
}
let el = document.querySelector('header');

window.addEventListener('scroll', toggleClassOnScroll.bind(el, 150));

function toggleClassOnScroll(pxAmount) {
  let scrollTop = document.body.scrollTop;
  
  if(scrollTop > pxAmount) {
    el.classList.add('grey__bc');
  } else {
    el.classList.remove('grey__bc');
  }
}


// burger 
const burgerTrigger = document.querySelector('.burger-menu_button'),
      burgerOverlay = document.querySelector('.burger-menu_overlay'),
      burgerMenu = document.querySelector('.burger-menu');
      burgerLink = document.querySelectorAll('.burger-menu_link');
function toggleBurgerMenu() {
    burgerTrigger.classList.toggle('active');
    burgerMenu.classList.toggle('active');
}
burgerTrigger.addEventListener('click', toggleBurgerMenu);
burgerOverlay.addEventListener('click', toggleBurgerMenu);
burgerLink.forEach((item) => {
    item.addEventListener('click', toggleBurgerMenu);
})