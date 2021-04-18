$(document).ready(function() {
    
    
    /* For the sticky navigation */
    $('.js--section-district').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
      offset: '60px;'
    });



});
