$(document).ready(function() {
  /*toggle btn*/
  $(".btn").click(function() {
    $(".nav-links").slideToggle(3000);
    $(".btn").toggleClass("change");
  });

  /**transparent background */

  $(window).scroll(function() {
    let position = $(window).scrollTop();
    if (position >= 100) {
      $("nav, nav-container").addClass("navBackground");
    } else {
      $("nav, nav-container").removeClass("navBackground");
    }
  });

  /**smooth scroll */

  $(".nav-links a").click(function(link) {
    link.preventDefault();
    let target = $(this).attr("href");
    console.log($(target).offset().top);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $(target).offset().top
        },
        3000
      );
  });

  /**OWL */
  $(".team-center").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    smartSpeed: 4000,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 5
      }
    }
  });

  $(".customers-center").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    smartSpeed: 4000,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 3
      }
    }
  });
});
