
  const nextDom = document.getElementById('next');
  const prevDom = document.getElementById('prev');
  const carouselDom = document.querySelector('.carousel');
  const SliderDom = carouselDom.querySelector('.carousel .list');
  const thumbnailDom = document.querySelector('.carousel .thumbnail');
  const timeDom = document.querySelector('.carousel .time');
  let thumbnailItemsDom = thumbnailDom.querySelectorAll('.item');

  // Setting animation time to 3000ms(3s)
  const timeRunning = 3000;
  let runTimout ;

  // The animation to autorun after 7 seconds
  let autoNextInterval = 7000;
  let runAutoNext = setTimeout(() => {
        nextDom.onclick();
   }, autoNextInterval);
 

  nextDom.onclick = function(){
    showSlider('next')
  }
  prevDom.onclick = function() {
    showSlider('prev')
  }

  function showSlider(){
    const sliderItem = document.querySelectorAll('.carousel .list .item')
    const thumbnailItem = document.querySelectorAll('.carousel .thumbnail .item')

    if (type == 'next'){
        SliderDom.appendChild(sliderItem[0])
        thumbnailDom.appendChild(thumbnailItem[0])
        carouselDom.classList.add('next')
    }else{
        const lastItemPosition = (sliderItem.length -1)
        SliderDom.prepend(sliderItem[lastItemPosition])
        thumbnailDom.prepend(thumbnailItem[lastItemPosition])
        carouselDom.classList.add('prev')
    }

    clearTimeout(runTimout) // Ensures equal time is assigned to every animation instance
    runTimout = setTimeout(() =>{  // to remove the 'next'/ 'prev' class from the 'carousel' class
        carouselDom.classList.remove('next')
        carouselDom.classList.remove('prev')
    }, timeRunning) 

    clearTimeout(runAutoNext)
  }