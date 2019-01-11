$(document).ready(function() {
    if ($('header .wrapper').append('<div class="car"></div>')) {
        function go() {

            $('.car').addClass('car_forward').animate({left: "293px", top: "270px"}, 4000, "linear", function() { //1
                $(this).animate({left: "640px", top: "235px"}, 4500, "linear", function() {//2
                    $(this).animate({left: "697px", top: "211px"}, 1000, "linear", function() {//3
                        $(this).animate({left: "739px", top: "168px"}, 1200, "linear", function() {//4
                            $(this).animate({left: "821px", top: "85px"}, 1400, "linear", function() {//5
                                $(this).animate({left: "856px", top: "5px"}, 1400, "linear", function() {//6
                                    $(this).removeClass('car_forward').addClass('car_back');
                                    rote(-25, -24);

                                    $(this).animate({left: "801px", top: "85px"}, 1600, "linear", function() { //1
                                        $(this).animate({left: "769px", top: "168px"}, 1600, "linear", function() { //2
                                            $(this).animate({left: "737px", top: "211px"}, 1400, "linear", function() { //3
                                                $(this).animate({left: "315px", top: "248px"}, 5800, "linear", function() { //4
                                                    $(this).animate({left: "293px", top: "264px"}, 1000, "linear", function() { //5
                                                        $(this).animate({left: "280px", top: "376px"}, 4000, "linear", function() { //6
                                                            go();
                                                            rote(1, 0);
                                                            $(this).addClass('car_forward').removeClass('car_back');

                                                        });
                                                        rote(35, 28);
                                                    });
                                                    rote(48, 35);
                                                });
                                                rote(20, 48);
                                            });
                                            rote(-5, 20);
                                        });
                                        rote(0, -5);
                                    });

                                });
                                rote(-29, -47);
                            });
                            rote(-11, -29);
                        });
                        rote(7, -11);
                    });
                    rote(30, 7);
                });
                rote(0, 30);
            });



            //    $('.car').css({left: "764px", top: "5px"}).removeClass('car_forward').addClass('car_back');


        }
        go();
    }

    if ($(window).width() < 1000) {
        $('.car').hide();
    }

    $(window).resize(function() {
        if ($(window).width() < 1000) {
            $('.car').hide();
        } else {
            $('.car').show();
        }
    });
});

function rote(a, b) {
    var haha;
    var $elie = $('.car'), degree = a, timer;
    rotate();
    function rotate() {
        if (a > b) {
            haha = (degree > b);
        } else {
            haha = (degree < b);
        }
        if (haha) {
            clearTimeout(timer);
            $elie.css({WebkitTransform: 'rotate(' + degree + 'deg)'});
            $elie.css({'-moz-transform': 'rotate(' + degree + 'deg)'});
        }
        timer = setTimeout(function() {
            if (a > b) {
                --degree;
            } else {
                ++degree;
            }
            rotate();
        }, 5);
    }
}