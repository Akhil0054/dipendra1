

AOS.init();


// start animated menu 
function myFunction(x) {
  x.classList.toggle("change");
}
// end animated menu 



  // start top scroll button 
window.addEventListener('scroll', function () {
  const scrollBtn = document.querySelector('.top-scroll-btn');
  
  if (window.scrollY > 200) {
    scrollBtn.style.display = 'flex'; // Show the button when scrolled down
  } else {
    scrollBtn.style.display = 'none'; // Hide the button when at the top
  }
});

// Function to scroll to the top
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

  // end top scroll button 



   // start tooltips js 
  document.addEventListener("DOMContentLoaded", function () {
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });
  });
  // end tooltips js 