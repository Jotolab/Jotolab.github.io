// ======= Start Ready Function =======
$(document).ready(function(){

// ======= Language Function ==========
  $("#en").on('click',function(){
    var dir = $("html").attr("dir");
       $("html").attr("dir", "ltr");
  });
  $("#ar").on('click',function(){
    var dir = $("html").attr("dir");
       $("html").attr("dir", "rtl");
  }); // End Language Function

   //======= Carousael slider =======
   $(document).ready(function() {
    //Events that reset and restart the timer animation when the slides change
    $("#transition-timer-carousel").on("slide.bs.carousel", function(event) {
        //The animate class gets removed so that it jumps straight back to 0%
        $(".transition-timer-carousel-progress-bar", this)
            .removeClass("animate").css("width", "0%");
    }).on("slid.bs.carousel", function(event) {
        //The slide transition finished, so re-add the animate class so that
        //the timer bar takes time to fill up
        $(".transition-timer-carousel-progress-bar", this)
            .addClass("animate").css("width", "100%");
    });

    //Kick off the initial slide animation when the document is ready
    $(".transition-timer-carousel-progress-bar", "#transition-timer-carousel")
        .css("width", "100%");
});


$("#selectbtn").click(function(){
  window.location.assign("uploadImages/index.html");
});


    console.log('Going Good');
});    // ======= End Ready Function =======



// ======= Start Load Function =======
$(window).load(function() {

});  // ======= End Load Function =======
