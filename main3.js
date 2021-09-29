//Clock


setInterval(displayClock, 500)

function displayClock() {
    var time = new Date();

    var hrs = time.getHours();
    var min = time.getMinutes();
    var sec = time.getSeconds();

   if (hrs < 12) {
       hrs = hrs + 0;
   }


   if (hrs == 0) {
       hrs = 12;
   }

   if ( hrs < 10) {
       hrs = '0' + hrs;
     }

    if ( min < 10 ) {
        min = '0' + min;
    }

    if ( sec < 10 ) {
        sec = '0' + sec;
    }


   document.getElementById('clock').innerHTML = hrs + ':' + min + ':' + sec

}


//@media open/close nav bar with burger

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    burger.addEventListener('click', ()=> {
        nav.classList.toggle('nav-active')
    })
}


navSlide();