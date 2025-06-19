/*
==============================================
    TravelWonder - Website Travel
    Author: TravelWonder Team
    Version: 1.0
==============================================
*/

$(document).ready(function () {
  "use strict";

  // Navbar Scroll Effect
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $(".navbar").addClass("scrolled");
      $(".back-to-top").addClass("active");
    } else {
      $(".navbar").removeClass("scrolled");
      $(".back-to-top").removeClass("active");
    }
  });

  // Smooth Scrolling
  $("a.nav-link, .footer-links a").on("click", function (e) {
    if (this.hash !== "") {
      e.preventDefault();
      const hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top - 70,
        },
        800
      );
    }
  });

  // Back to Top Button
  $(".back-to-top").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, 800);
    return false;
  });

  // Destination Card Hover Effect
  $(".destination-card").hover(
    function () {
      $(this).find(".destination-img img").css("transform", "scale(1.1)");
    },
    function () {
      $(this).find(".destination-img img").css("transform", "scale(1)");
    }
  );

  // Package Card Hover Effect
  $(".package-card").hover(
    function () {
      $(this).find(".package-thumb img").css("transform", "scale(1.1)");
    },
    function () {
      $(this).find(".package-thumb img").css("transform", "scale(1)");
    }
  );

  // Testimonial Slider (if you want to add a slider)
  // Uncomment this if you add a slider library like Slick
  /*
    $('.testimonial-slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    */

  // Form Validation
  $(".booking-form, .contact-form, .newsletter-form").submit(function (e) {
    e.preventDefault();
    // You can add form validation and AJAX submission here
    alert("Terima kasih! Formulir Anda telah berhasil dikirim.");
    this.reset();
  });

  // Search Form
  $(".search-container form").submit(function (e) {
    e.preventDefault();
    // You can add search functionality here
    alert("Pencarian sedang diproses...");
  });

  // Animated Counter (if you want to add counters)
  // Uncomment this if you add counter elements
  /*
    $('.counter').each(function() {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 3000,
            easing: 'swing',
            step: function(now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
    */

  // Datepicker for booking form (if you want to customize the date picker)
  // Uncomment this if you add a datepicker library
  /*
    $('#departure-date, #return-date, #check-in, #check-out').datepicker({
        autoclose: true,
        format: 'dd/mm/yyyy',
        startDate: 'today'
    });
    */

  // Initialize tooltips
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });

  // Initialize popovers
  var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
  var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl);
  });

  // Add animation on scroll
  // This requires AOS library, uncomment if you add it
  /*
    AOS.init({
        duration: 1000,
        once: true
    });
    */
});
