$(document).ready(function(){
   
    
    
    
    
    // adjust header height
    
    $(".header").height( $(window).height() );
    $(".header .fill").height( $(window).height() );
    
    $(window).resize(function(){
        $(".header").height( $(window).height() );
        $(".header .fill").height( $(window).height() );
    });
    
    
    // active links class
    
    $(".links li a").click(function(){
       
        $(this).parent().addClass("active").siblings().removeClass('active');
    });
    
    
    // Nice scroll
    $("html").niceScroll();
    
    //mixitup
    $('#Container').mixItUp();
    
    //shuffle mixit up
    $('.shuffle li').click(function(){
       $(this).addClass('active').siblings().removeClass('active'); 
    });
    
    
    
    //Scroll Top
    var fly = $('#scrolltop');
    
    $(window).scroll(function(){
        $(this).scrollTop() >= 500 ?  fly.show() : fly.hide();
    });
    
    fly.click(function(){
        $("html,body").animate({scrollTop:0},1000);
    });
    

    
    //smooth scroll to sections
    $('.pro').click(function(){
        $("html, body").animate({
            scrollTop: $('#profile').offset().top
        }, 1000);
    });
    
    
    
    
    
    //bxslider
    $('.header .bxslider').bxSlider({
        auto :true,
        pager :false,
        Controls :false,
        pause :1500
    });
    
    
    $('.experience .bxslider').bxSlider({
        auto :true,
        pager :true,
        Controls :false,
        pause :3000,
        autoHover :true
    });
    
    
  //----------------------------------Bubble-----------------------------------
    
    
    
    $('.slider').each(function() {              // For every slider
  var $this   = $(this);                    // Current slider
  var $group  = $this.find('.slide-group'); // Get the slide-group (container)
  var $slides = $this.find('.slide');       // Create jQuery object to hold all slides
  var buttonArray  = [];                    // Create array to hold navigation buttons
  var currentIndex = 0;                     // Hold index number of the current slide
  var timeout;                              // Sets gap between auto-sliding

  function move(newIndex) {          // Creates the slide from old to new one
    var animateLeft, slideLeft;      // Declare variables

    advance();                       // When slide moves, call advance() again

    // If it is the current slide / animating do nothing
    if ($group.is(':animated') || currentIndex === newIndex) {  
      return;
    }

    buttonArray[currentIndex].removeClass('active'); // Remove class from item
    buttonArray[newIndex].addClass('active');        // Add class to new item

    if (newIndex > currentIndex) {   // If new item > current
      slideLeft = '100%';            // Sit the new slide to the right
      animateLeft = '-100%';         // Animate the current group to the left
    } else {                         // Otherwise
      slideLeft = '-100%';           // Sit the new slide to the left
      animateLeft = '100%';          // Animate the current group to the right
    }
    // Position new slide to left (if less) or right (if more) of current
    $slides.eq(newIndex).css( {left: slideLeft, display: 'block'} );

    $group.animate( {left: animateLeft}, function() {    // Animate slides and
      $slides.eq(currentIndex).css( {display: 'none'} ); // Hide previous slide      
      $slides.eq(newIndex).css( {left: 0} ); // Set position of the new item
      $group.css( {left: 0} );               // Set position of group of slides
      currentIndex = newIndex;               // Set currentIndex to the new image
    });
  }

  function advance() {                     // Used to set 
    clearTimeout(timeout);                 // Clear previous timeout
    timeout = setTimeout(function() {      // Set new timer
      if (currentIndex < ($slides.length - 1)) { // If slide < total slides
        move(currentIndex + 1);            // Move to next slide
      } else {                             // Otherwise
        move(0);                           // Move to the first slide
      }
    }, 2000);                              // Milliseconds timer will wait
  }

  $.each($slides, function(index) {
    // Create a button element for the button
    var $button = $('<button type="button" class="slide-btn">&bull;</button>');
    if (index === currentIndex) {    // If index is the current item
      $button.addClass('active');    // Add the active class
    }
    $button.on('click', function() { // Create event handler for the button
      move(index);                   // It calls the move() function
    }).appendTo('.slide-buttons');   // Add to the buttons holder
    buttonArray.push($button);       // Add it to the button array
  });

  advance();                          // Script is set up, advance() to move it


});
    
    
  //--------------------------infinity animation---------------------------------
        
      (function hussien(){
        $('#scrolltop').animate({
            bottom:'30px'
        },1000,function(){
           $('#scrolltop').animate({
               bottom:'25px'
           },1000,function(){
               hussein();
           }); 
        });
    
      }); 

       

});



// Loading Screen
$(window).load(function(){
    $(".main").fadeOut(1000);    
    
});
    
