setTimeout(() => {
  toCustomSlide(1)}, 400) // демонстрируем что умеет home блок

  // window.addEventListener('scroll', () => console.log("scroll"))

// ========== Start firework handle ==========
const $startFirework = document.getElementById('startFirework')
const $firework1 = document.querySelector('.home__fireworkGun_one')
const $firework2 = document.querySelector('.home__fireworkGun_two')
const $firework3 = document.querySelector('.home__fireworkGun_three')
const $arrayImg = $startFirework.querySelectorAll('img') // все картинки вместе взятые
  
  $startFirework.addEventListener('click', () => {
    window.scrollTo(0, 0)
    overlay(true)
  })


  // ----- определяем местонозаждение коробки с фейрверками -----
  const $rect = document.getElementById('fireworkBox')
  function getOffset(el) {
    const $el = el.getBoundingClientRect();
    return {
      left: $el.left + window.scrollX,
      top: $el.top + window.scrollY
    };
  }
  // -//-- определяем местонозаждение коробки с фейрверками -----

  // ----- функция анимации фейрверков -----
  var isAnimation = false // переменная определяющая идёт анимация или нет

  function animate({ duration, draw, timing }) {
    if (isAnimation === false) {
      let start = performance.now()
      isAnimation = true
  
      requestAnimationFrame(function animate(time) {
        let timeFraction = (time - start) / duration
        if (timeFraction > 1) timeFraction = 1
          let progress = timing(timeFraction)
          
          draw(progress);
          if (timeFraction < 1) {
            requestAnimationFrame(animate)
          } else {
            console.info('finish!!!')
            fireworkBOOM()
          }
      })
    }
  }
  function fireworkBOOM() {

    
    for(let i = 0; i < $arrayImg.length; i++) {
      $arrayImg[i].setAttribute('src', './img/home/fireworkBOOM.png')
    }
    // -- возвращаю фейрверки в положение по умолчанию --
    setTimeout(()=> {
      overlay(false)
      for(let i = 0; i < $arrayImg.length; i++) {
        $arrayImg[i].setAttribute('src', './img/home/fireworkGun.png')
      }
      for(let i = 0; i < $arrayImg.length; i++) {
        $arrayImg[i].style.margin = 0
        $arrayImg[i].style.bottom = 0
      }
      isAnimation = false
    }, 800)
    // // возвращаю фейрверки в положение по умолчанию --
  }

    // --- меняю значения переменных с координатами коробки фейрверков ---    
    root = document.documentElement;
    setTimeout(() => {
      root.style.setProperty('--fireworkPositionX', (getOffset($rect).left - 50) + 'px');
      root.style.setProperty('--fireworkPositionY', (getOffset($rect).top - -50) + 'px');
    }, 0);
    // //- меняю значения переменных с координатами коробки фейрверков ---
  // -//-- функция анимации фейрверков -----

  // ----- функция для запрета на прокрутку -----
  function overlay(show) {
    var top = $(window).scrollTop()
    var left = $(window).scrollLeft()

    if (show) {
      console.log('true')

      $(window).scroll(function(){
        $(this).scrollTop(top).scrollLeft(left)
      })
    } else {  
      console.log('false')

      $(window).unbind('scroll');
    }
  }
    // -//-- функция для запрета на прокрутку -----
// //======== Start firework handle ==========

// ========== Open photo/card on click ==========
const galleryContainer = document.querySelector('.gallery__container')
var classesOfLastActive
galleryContainer.addEventListener('click', (event) => {
  const objClick = event.target
  if (objClick.tagName.toLowerCase() === 'button') {
    resetClassesOfPhoto(objClick)
    console.log()
    objClick.classList.toggle('photo-click')
    classesOfLastActive = objClick
  } else {
    if (objClick.tagName.toLowerCase() === 'p') {
      resetClassesOfPhoto(objClick.closest('button'))
      objClick.closest('button').classList.toggle('photo-click')
      classesOfLastActive = objClick.closest('button')
    }
  }
})

function resetClassesOfPhoto($objClickF) {
  if (classesOfLastActive && classesOfLastActive != undefined && classesOfLastActive != $objClickF) {
    classesOfLastActive.classList = ['photo']
  }
}
// //======== Open photo/card on click ==========
