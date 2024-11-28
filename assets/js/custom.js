// blogslider start
$(".blogslid").slick({
    dots: true,
    arrows: true,
    autoplay: true,
    infinite: true,
    prevArrow: '<button class="slide-arrow prev-arrow"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
    nextArrow: '<button class="slide-arrow next-arrow"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 4,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            },
        },
    ],
});


(function() {
    var parent = document.querySelector("#rangeSlider");
    if (!parent) return;
  
    var range = parent.querySelector(".range-input"),
        numberInput = parent.querySelector(".number-input");
  
    range.oninput = function() {
      var value = parseFloat(range.value);
      numberInput.value = `$${value.toLocaleString()}`;
  
      // Update the slider fill color up to the thumb
      var percentage = ((value - 100) / (10000 - 100)) * 100;
      range.style.setProperty('--slider-value', `${percentage}%`);
    };
  })();
  
  (function() {
    let counterValue = 1;
    const counterDisplay = document.getElementById("counter-value");
    
    document.getElementById("increase").onclick = function() {
      counterValue++;
      updateCounter();
    };
    
    document.getElementById("decrease").onclick = function() {
      if (counterValue > 1) {
        counterValue--;
      }
      updateCounter();
    };
  
    function updateCounter() {
      counterDisplay.textContent = counterValue.toString().padStart(2, '0');
    }
  })();
  

  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    arrows: false,
    centerMode: true,
    focusOnSelect: true,
    responsive: [
      {
          breakpoint: 767,
          settings: {
              slidesToShow: 2,
          },
      },
  ],
  });
  

  function upload() {

    const fileUploadInput = document.querySelector('.file-uploader');
  
    /// Validations ///
  
    if (!fileUploadInput.value) {
      return;
    }
  
    // using index [0] to take the first file from the array
    const image = fileUploadInput.files[0];
  
    // check if the file selected is not an image file
    if (!image.type.includes('image')) {
      return alert('Only images are allowed!');
    }
  
    // check if size (in bytes) exceeds 10 MB
    if (image.size > 10_000_000) {
      return alert('Maximum upload size is 10MB!');
    }
  
    /// Display the image on the screen ///
  
    const fileReader = new FileReader();
    fileReader.readAsDataURL(image);
  
    fileReader.onload = (fileReaderEvent) => {
      const profilePicture = document.querySelector('.profile-picture');
      profilePicture.style.backgroundImage = `url(${fileReaderEvent.target.result})`;
    }
  
    // upload image to the server or the cloud
  }




  // tabs js section 

  function openTab(event, tabId) {
    // Saare tabs aur content elements ko nikaalo
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    // Saare tab-buttons aur tab-contents ka active class hatao
    tabButtons.forEach(button => button.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));

    // Clicked tab-button aur uska content active banao
    event.currentTarget.classList.add('active');
    document.getElementById(tabId).classList.add('active');
}

  // panignation js 

  $(document).ready(function() {
    // Starting page number
    var paginationPage = parseInt($('.pagination').attr('actpage'), 10);
  
    $('.page-link').on('click', function(event) {
      event.preventDefault();
      var go = $(this).attr('href').replace('#!', '');
  
      if (go === '+1') {
        paginationPage++;
      } else if (go === '-1') {
        paginationPage--;
      } else {
        paginationPage = parseInt(go, 10);
      }
  
      $('.pagination').attr('actpage', paginationPage);
      updatePagination(paginationPage);
    });
  
    function updatePagination(page) {
      $('.page-link').removeClass('active');
  
      // Highlight the current page
      $('.page-link').each(function() {
        var pageNum = $(this).attr('href').replace('#!', '');
        if (parseInt(pageNum, 10) === page) {
          $(this).addClass('active');
        }
      });
  
      // Show or hide dots based on the page
      if (page > 1 && page < 10) {
        $('.page-link.dots').show();
      } else {
        $('.page-link.dots').hide();
      }
    }
  
    // Initial pagination update
    updatePagination(paginationPage);
  });
  



  // offcanvas shop

  function toggleSidebar() {
    const sidebar = document.getElementById("sidebar-offcanvas");
    const mainContent = document.getElementById("main-content");

    if (sidebar.style.width === "320px") {
        sidebar.style.width = "0";
    } else {
        sidebar.style.width = "320px";
    }
}


  