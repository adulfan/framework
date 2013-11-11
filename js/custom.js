
// IIFE - Immediately Invoked Function Expression
(function(ad) {

  // The global jQuery object is passed as a parameter
	ad(window.jQuery, window, document);

}
(function($, window, document) {

  //dropdown functionality links
  function accordion() {
    var header =  $('#accordion h3');
    header.next().not(":first").hide();
    header.first().addClass('up');
    header.on('click', function(e) {
      if ($(this).next().is(":visible")) {
        $(this).next().slideUp('slow');
        header.removeClass('up');
        e.stopPropagation();
      } else {
          header.next().slideUp('slow');
          header.removeClass('up');
          $(this).addClass('up');
           $(this).next().slideDown('slow'); 
          e.stopPropagation();    
      }
    });
  }
  //equal columns
  function equal_cols() {
    var column = $(".equal");
    //first reset the height
    column.height('auto');
    //arrray of heights
    var heightArray = column.map(function() {
      return $(this).height();
    }).get();
    //do the math.
    var maxHeight = Math.max.apply(Math, heightArray);
    column.height(maxHeight);
  }
  
  //best practice event handling
  function event_handling () {
    var list = $("#longlist");
    
    list.on("mouseenter", "li", function(){
      $(this).text("Click me!");
    });
 
    list.on("click", "li", function() {
      $(this).text("Why did you click me?!");
    });
  }
     
  // Dynamically building an unordered list from an array
  //if I even need it
  function dynamic_list() {
    var localArr = ["Greg", "Peter", "Kyle", "Danny", "Mark"],
  	list = $("ul.people");
  	dynamicItems = "";
  
    $.each(localArr, function(index, value) {
      dynamicItems += "<li id=" + index + ">" + value + "</li>";
    });
  
    list.append(dynamicItems);
 
    var localArr = ["Monday", "Tuesday", "Wednsday", "Thursday", "Friday","Saturday", "Sunday"],
  	list = $("ul.days");
  	dynamicItems = "";
  
    $.each(localArr, function(index, value) {
      dynamicItems += "<li>" + value + "</li>";
    });
  
    list.append(dynamicItems);
    
  }
  
  //back to top of the page function.
  function back_to_top () {
    $('a[href=#top]').click(function (event) {
      $('html, body').animate({scrollTop : 0}, 'slow');
      event.preventDefault();
    });
  }
  function drop_downs() {
    $('.trigger').click(function(e) {
      if ($(this).next(".dropdown-menu").is(":visible")) {
        e.stopPropagation();
        $(this).next().slideUp('fast');
      } else {
        $(".dropdown-menu").slideUp('fast');
        e.stopPropagation();
        $(this).next().slideDown('fast');
      }
    });
    $(document).click(function(e) {
      // if the target of the click isn't the container nor a descendant of the container...
      if (!$('.dropdown-menu').is(e.target) && $('.dropdown-menu').has(e.target).length === 0) {
          $(".dropdown-menu").slideUp('slow');
      }
    });
  }
  //expand collapse list of links or data.
  function expand_collapse() {
    var n = 5;
    var expand_list_li = $('.expand-list li');
    var sum_total = expand_list_li.length;
  
    if(sum_total > 9 ) {
     $('.expand-list li').slice(n).hide();
     $('.block').append('<a class="more-link">View All</a>');
    }
    
    $('.more-link').on('click', function(e) {
      $('.expand-list li').slice(n).slideToggle(400); 
      $(this).html(($(this).text() == 'View All') ? 'View Less' : 'View All');
      $(this).toggleClass('down');
      e.preventDefault();
   });
  }//end expend list function.

  $(function() {
   // The DOM is ready!
   
   // Stores the live DOM element inside of a variable
   var header = $("h2");
   var mid_col = $('#maincolumn');
    
    //call functions here
    dynamic_list();//must be before equalise;
    equal_cols();
    back_to_top ();
    accordion();
    drop_downs();
    expand_collapse();
  });
  
  $(window).resize(function (e) {
     equal_cols();
   });
}));