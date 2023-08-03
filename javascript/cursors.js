var $cursors
function activateWave() {
  document.addEventListener('DOMContentLoaded', () => {
    $cursors = document.querySelectorAll('.cursor-container')
    
    for (let i = 0; i < ($cursors.length); i++) {
      $cursors[i].addEventListener('animationend', function() {
        $cursors[i].querySelector('div .cursor__wave').style.animation = 'cursor__wave_active 0.8s linear forwards'
        var targetObj = $cursors[i].querySelector('div .cursor__wave').classList
        document.getElementById(targetObj[--targetObj.length]).style.animation = 'objectOnClick 0.3s linear forwards'
        console.log('анимация кончена ')
        console.log(this)      
      }, { once: true })
    }
  })
}


activateWave()

// ========== Активируем курсоры при необходимости ==========
var usedCursorsArray = [] // массив уже активированных курсоров
  /* функция проверяет, был ли уже активирован данный курсор */
function isActivatedBefore(cursorID) {
  if (usedCursorsArray.indexOf(cursorID) !== -1) {
    return true // уже использовали
  } else {
    usedCursorsArray.push(cursorID)
    return false // ещё не использовали
  }
}

  /* курсор указывающий на ферверки */
window.addEventListener('scroll', () => {
  if (isActivatedBefore('home__cursor') === false) {
    document.getElementById('home__cursor').style.animation = 'fireworkX_animation .8s linear forwards'
    document.querySelector('#home__cursor div').style.animation = 'fireworkY_animation .8s cubic-bezier(.5,.55,.5, .55) forwards'
  }
})
  /* курсор указывающий на фото из галлереи */
window.addEventListener('scroll', () => {
  if (window.scrollY > 995) {
    if (isActivatedBefore('gallery__cursor') === false) {
      document.getElementById('gallery__cursor').style.animation = 'photoX_animation .8s linear forwards'
      document.querySelector('#gallery__cursor > .cursor').style.animation = 'photoY_animation .8s cubic-bezier(.5,.55,.5, .55) forwards' //rotate .5s linear forwards
      
      const $photo5 = document.getElementById('photo-5')
      $photo5.addEventListener('animationend', () => {
        setTimeout(() => {
          $photo5.style.animation = 'none'
        }, 0)
      })
    }
  }
})
// //======== Активируем курсоры при необходимости ==========