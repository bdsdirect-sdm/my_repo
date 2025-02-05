$(window).scroll(function() {
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
});

$(document).ready(function() {  
  
    var sideslider = $('[data-toggle=collapse-side]');
      
    var sel = sideslider.attr('data-target');
    var sel2 = sideslider.attr('data-target-2');
    
    sideslider.click(function(event)
                     {
        alert(sideslider);
        $(sel).toggleClass('in');
        $(sel2).toggleClass('out');
        
      });
});