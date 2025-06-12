document.querySelectorAll('.dropdown-parent > a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent jump to anchor
    const dropdown = link.nextElementSibling;
    if (dropdown.style.display === "block") {
      dropdown.style.display = "none";
    } else {
      dropdown.style.display = "block";
    }
  });
});

$(function () {

  $(".homebanner_slider").owlCarousel({
    autoplay: false,
    loop: true,
    margin: 15,
    dots: true,
    items: 1,
    navText: false,
  });

  $(".bestseller_main").owlCarousel({
    autoplay: false,
    loop: true,
    margin: 15,
    dots: false,
    // slideTransition: "linear",
    // autoplayTimeout: 3000,
    // autoplayHoverPause: false,
    // autoplaySpeed: 5000,
    navText: false,
    navText: [
      '<i class="fa-solid fa-arrow-left"></i>',
      '<i class="fa-solid fa-arrow-right"></i>'
    ],
    responsive: {
      0: {
        items: 1
      },
      500: {
        items: 2
      },
      800: {
        items: 3
      },
      1100: {
        items: 4
      }
    }
  });
});

$(".catergory_row").owlCarousel({
  autoplay: false,
  loop: true,
  margin: 15,
  dots: false,
  // slideTransition: "linear",
  // autoplayTimeout: 3000,
  // autoplayHoverPause: false,
  // autoplaySpeed: 5000,
  navText: false,
  // navText: [
  //   '<i class="fa-solid fa-arrow-left"></i>',
  //   '<i class="fa-solid fa-arrow-right"></i>'
  // ],
  responsive: {
    0: {
      items: 1
    },
    500: {
      items: 3
    },
    990: {
      items: 5
    },
    1200: {
      items: 6
    }
  }
});

$(".story_slide").owlCarousel({
  autoplay: true,
  loop: true,
  margin: 15,
  dots: false,
  // slideTransition: "linear",
  // autoplayTimeout: 3000,
  // autoplayHoverPause: false,
  // autoplaySpeed: 5000,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  navText: false,
  navText: [
    '<i class="fa-solid fa-arrow-left"></i>',
    '<i class="fa-solid fa-arrow-right"></i>'
  ],
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    990: {
      items: 1.4
    }
  }
});


$(".event_slider").owlCarousel({
  autoplay: false,
  loop: true,
  margin: 15,
  dots: true,
  navText: false,
  navText: [
    '<i class="fa-solid fa-arrow-left"></i>',
    '<i class="fa-solid fa-arrow-right"></i>'
  ],
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1200: {
      items: 2
    }
  }
});

$(".inspir_slide").owlCarousel({
  autoplay: false,
  loop: true,
  margin: 15,
  dots: true,
  navText: false,
  navText: [
    '<i class="fa-solid fa-arrow-left"></i>',
    '<i class="fa-solid fa-arrow-right"></i>'
  ],
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    990: {
      items: 3
    },
    1100: {
      items: 4
    }
  }
});


$(".certificate_slide").owlCarousel({
  autoplay: false,
  loop: true,
  margin: 15,
  dots: false,
  items: 1,
  navText: false,
  navText: [
    '<i class="fa-solid fa-arrow-left"></i>',
    '<i class="fa-solid fa-arrow-right"></i>'
  ],
});

$(".bloglist_slider").owlCarousel({
  autoplay: false,
  loop: true,
  margin: 15,
  dots: true,
  items: 1,
  navText: false,
});

$(".product_slidimg").owlCarousel({
  autoplay: false,
  loop: false,
  margin: 15,
  dots: false,
  navText: false,
  responsive: {
    0: {
      items: 2
    },
    370: {
      items: 3
    },
    500: {
      items: 4
    },
    767: {
      items: 5
    },
  }
});

// socail shatr in listing page
// document.addEventListener("DOMContentLoaded", function () {
//   document.querySelector('.collection_main .share').addEventListener('click', function () {
//     document.querySelector('.collection_main .social').classList.toggle('active');
//     this.classList.toggle('active'); // optional: to animate/share icon itself
//   });
// });


document.addEventListener("DOMContentLoaded", function () {
  const collectionBlocks = document.querySelectorAll('.collect_item');

  collectionBlocks.forEach(function (block) {
    const shareBtn = block.querySelector('.share');
    const socialMenu = block.querySelector('.social');

    if (shareBtn && socialMenu) {
      shareBtn.addEventListener('click', function () {
        socialMenu.classList.toggle('active');
        this.classList.toggle('active');
      });
    }
  });
});



// Pagination
const itemsPerPage = 4;
const blogItems = document.querySelectorAll('.listing_allblog .row');
const pagination = document.getElementById('pagination');

let currentPage = 1;
const totalPages = Math.ceil(blogItems.length / itemsPerPage);

function showPage(page) {
  currentPage = page;
  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;

  blogItems.forEach((item, index) => {
    item.style.display = (index >= start && index < end) ? 'flex' : 'none';
  });

  renderPagination();
}

function renderPagination() {
  pagination.innerHTML = '';

  // Prev button
  const prevBtn = document.createElement('button');
  prevBtn.innerText = '< Prev';
  prevBtn.disabled = currentPage === 1;
  prevBtn.onclick = () => showPage(currentPage - 1);
  pagination.appendChild(prevBtn);

  // Next button
  const nextBtn = document.createElement('button');
  nextBtn.innerText = 'Next >';
  nextBtn.disabled = currentPage === totalPages;
  nextBtn.onclick = () => showPage(currentPage + 1);
  pagination.appendChild(nextBtn);
}

showPage(1); // Initial load


// poduct quality increase

document.addEventListener("DOMContentLoaded", function () {
  const decreaseBtn = document.querySelector(".decrease");
  const increaseBtn = document.querySelector(".increase");
  const quantityInput = document.querySelector(".quantity-input");

  if (decreaseBtn && increaseBtn && quantityInput) {
    decreaseBtn.addEventListener("click", () => {
      let value = parseInt(quantityInput.value);
      if (value > parseInt(quantityInput.min)) {
        quantityInput.value = value - 1;
      }
    });

    increaseBtn.addEventListener("click", () => {
      let value = parseInt(quantityInput.value);
      quantityInput.value = value + 1;
    });
  } else {
    console.warn("One or more elements not found.");
  }
});


// counter start
function animateCounter(element, target) {
  let count = 0;
  const screenSize = window.innerWidth;
  const speed = screenSize < 768 ? 100 : 200;
  const increment = target / speed;

  const updateCounter = () => {
    count += increment;
    if (count >= target) {
      element.textContent = target;
    } else {
      element.textContent = Math.ceil(count);
      requestAnimationFrame(updateCounter);
    }
  };

  updateCounter();
}

// Trigger counter on page load or when in view
document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".number");

  counters.forEach(counter => {
    const target = parseInt(counter.getAttribute("data-target"));
    animateCounter(counter, target);
  });
});

// old

$(".testimonials-slider").owlCarousel({
  loop: true,
  margin: 10,
  items: 1,
  nav: false,
  autoplay: false,
  dots: true,
  navText: [
    '<i class="fa-solid fa-angle-left"></i>',
    '<i class="fa-solid fa-angle-right"></i>'
  ]

});

// faq
$(document).ready(function () {
  $(".faqs-container .faq-singular:first-child").addClass("active").children(".faq-answer").slideDown();//Remove this line if you dont want the first item to be opened automatically.
  $(".faq-question").on("click", function () {
    if ($(this).parent().hasClass("active")) {
      $(this).next().slideUp();
      $(this).parent().removeClass("active");
    }
    else {
      $(".faq-answer").slideUp();
      $(".faq-singular").removeClass("active");
      $(this).parent().addClass("active");
      $(this).next().slideDown();
    }
  });
});


// pagination

var items = $(".faqs-container .faq-singular");
var numItems = items.length;
var perPage = 5;

items.slice(perPage).hide();

if (numItems > perPage) {
  $('.question-main #pagination-container').pagination({
    items: numItems,
    itemsOnPage: perPage,
    prevText: "&laquo;",
    nextText: "&raquo;",
    onPageClick: function (pageNumber) {
      var showFrom = perPage * (pageNumber - 1);
      var showTo = showFrom + perPage;
      items.hide().slice(showFrom, showTo).show();
    }
  });
} else {
  $('.question-main #pagination-container').hide(); // Hides pagination if not needed
}

// read more
$('.moreless-button').click(function () {
  // Slide up all other open 'moretext' elements except the one being clicked
  $('.moretext').not($(this).closest('.read-moremain').find('.moretext')).slideUp();

  // Toggle the 'moretext' within the clicked section
  $(this).closest('.read-moremain').find('.moretext').slideToggle();

  // Update the text of all other 'moreless-button' elements
  $('.moreless-button').not(this).text("Read more");

  // Update the text of the clicked button
  if ($(this).text() == "Read less") {
    $(this).text("Read more");
  } else {
    $(this).text("Read less");
  }
});
