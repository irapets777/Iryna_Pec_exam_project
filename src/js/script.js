const humb = document.querySelector('#burger-icon');
const humbBody = document.querySelector('#burger-menu');


humb.addEventListener('click', humbHandler);
function humbHandler(e) {
   e.preventDefault();
   humbBody.classList.toggle("open");
   humb.classList.toggle('active');
}


let slider = $(document).ready(function () {
  $('.design__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    variableWidth: true,
    prevArrow: '<img class="arrow left" src="img/arrow-left.svg" alt="">',
    nextArrow: '<img class="arrow right" src="img/arrow-right.svg" alt="">',
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 4,
          variableWidth: false,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          variableWidth: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          variableWidth: false,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          variableWidth: false,
        }
      }
    ]
  });
});



