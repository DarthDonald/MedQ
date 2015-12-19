var main = function() {
    $('.icon-menu').click(function() {
        $('.menu').animate({
            left: "0px"
        }, 200);

        $('body').animate({
            left: "20%",
            width: "80%"
        }, 200);
        $(".description_doctor").animate({
            paddingBottom: "30px"
        }, 200);
    });

    $('.icon-close').click(function() {
        $('.menu').animate({
            left: "-20%"
        }, 200);

        $('body').animate({
            left: "0px",
            width: "100%"
        }, 200);
        $(".description_doctor").animate({
            paddingBottom: "10px"
        }, 200);
    });
};

$(document).ready(main);