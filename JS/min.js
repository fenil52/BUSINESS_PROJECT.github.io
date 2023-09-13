var a=document.getElementById("toggle-id");
var b=document.querySelector("#list")
a.addEventListener("click",function(){
    a.classList.toggle("toggle-menu");
    b.classList.toggle("list");
});


/* When the user scrolls down, hide the Toggle list. When the user scrolls up, show the toggle listr */
window.onscroll = function() {
    a.classList.remove("toggle-menu");
    b.classList.remove("list");
  };

// COUNTER NUMBERS----

$.fn.jQuerySimpleCounter = function( options ) {
    var settings = $.extend({
        start:  0,
        end:    100,
        easing: 'swing',
        duration: 400,
        complete: ''
    }, options );

    var thisElement = $(this);

    $({count: settings.start}).animate({count: settings.end}, {
        duration: settings.duration,
        easing: settings.easing,
        step: function() {
            var mathCount = Math.ceil(this.count);
            thisElement.text(mathCount);
        },
        complete: settings.complete
    });
};


$('#number1').jQuerySimpleCounter({end: 12,duration: 3200});
$('#number2').jQuerySimpleCounter({end: 55,duration: 3000});
$('#number3').jQuerySimpleCounter({end: 359,duration: 3000});
$('#number4').jQuerySimpleCounter({end: 246,duration: 3000});

