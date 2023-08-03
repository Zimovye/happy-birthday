var $sliderContainer = document.querySelector('.slider__container')
var $slideItems = document.querySelectorAll('.slide')
var slideIndex = 0

/* функция для смены положения с контейнера со слайдами в экран пользователя (показ слайда) */
function showSlide(index) {
  $sliderContainer.style.transform = `translateX(-${index * 100}%)`

  $slideItems.forEach((item) => {
    item.classList.remove('activeslide')
  })

  $slideItems[index].classList.add('activeslide')
  makeTimer()
}

    /* функция для переключения на СЛЕДУЮЩИЙ слайд */
function nextSlide() { 
  console.log('next slide')
  slideIndex++
  if (slideIndex === $slideItems.length) {
    slideIndex = 0
  }
  showSlide(slideIndex)
}
    /* функция для переключения на НУЖНЫЙ слайд */
function toCustomSlide(index) {
  slideIndex = index
  if (slideIndex === $slideItems.length) {
    slideIndex = 0
  }
  showSlide(slideIndex)
}

    /* функция таймера, сбрасываем его, чтобы не было состыковок при переключении */
var timer = 0
makeTimer() //Создаем интервал 
function makeTimer(){
    clearInterval(timer) //Очистим интервал, это позволит прервать его работу и отменить перелистывание
    timer = setInterval(function() {
        slideIndex++
        toCustomSlide(slideIndex)
    }, 4000)
}
// -//-- автоматическое переключение слайдера -----

