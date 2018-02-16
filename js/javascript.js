// ======= Start Ready Function =======
$(document).ready(function () {

// ======= Language Function ==========
    $("#en").on('click', function () {
        $("html").attr("dir", "ltr");
        $("html").attr("lang", "en");
    });
    $("#ar").on('click', function () {
        $("html").attr("dir", "rtl");
        $("html").attr("lang", "ar");
    }); // End Language Function

    //======= Carousael slider =======
    $(document).ready(function () {
        //Events that reset and restart the timer animation when the slides change
        $("#transition-timer-carousel").on("slide.bs.carousel", function (event) {
            //The animate class gets removed so that it jumps straight back to 0%
            $(".transition-timer-carousel-progress-bar", this)
                    .removeClass("animate").css("width", "0%");
        }).on("slid.bs.carousel", function (event) {
            //The slide transition finished, so re-add the animate class so that
            //the timer bar takes time to fill up
            $(".transition-timer-carousel-progress-bar", this)
                    .addClass("animate").css("width", "100%");
        });

        //Kick off the initial slide animation when the document is ready
        $(".transition-timer-carousel-progress-bar", "#transition-timer-carousel")
                .css("width", "100%");
    });

    $("#selectbtn").on('click', function () {
        if ($("html").attr("lang") === "en") {
            window.location.assign("uploadImages/en-index.html");
        } else {
            window.location.assign("uploadImages/ar-index.html");
        }
    });

    $(".removebtn").on('click', function () {
        var url = window.location.href;
        $('.removebtn').parent().parent().css("display", "none");
        if ($("html").attr("lang") === "en") {
            url = url.split('&')[0];
            history.pushState(null, null, url.replace(/&view=.*(&?)/, '$1'));
            $('.itemReview').html("<div class='col-md-12'><h4>The images have been removed, There are no photos selected! <a class='small' href='index.html'>back to home</a></h4></div>");
            $('.summary').css('visibility', 'hidden');
        } else {
            $('.itemReview').html("<div class='col-md-12'><h4>تم حذف المنتج، لا يوجد هناك صور مختارة! <a class='small' href='index.html'>العودة الى الرئيسية</a></h4></div>");
            $('.summary').css('visibility', 'hidden');
            url = url.split('&')[0];
            history.pushState(null, null, url.replace(/&view=.*(&?)/, '$1'));
        }
        event.stopPropagation();
    });

    $(".productPhoto")
            .hover(function () {
                $(this).find("img").css('opacity', '0.3');
                $(this).find(".caption").css('opacity', '0.3');
                $(this).find("button").css('opacity', '1');
            }, function () {
                $(this).find("img").css('opacity', '1');
                $(this).find(".caption").css('opacity', '1');
                $(this).find("button").css('opacity', '0');
            });

    console.log('Going Good');
});    // ======= End Ready Function =======



// ======= Start Load Function =======
$(window).load(function () {

});  // ======= End Load Function =======
