// HAMBURGER MENU

const portApp = {};

portApp.hamburgerClick = () => {
    $("#hamburger").on("click", () => {
        let menuStatus = $(".menuContent").hasClass("menuShow")
        if (menuStatus === false) {
            $("#hamburgerIcon").addClass("hamburgerSpin").delay(500).queue(function () {
                $("#hamburgerIcon").removeClass("hamburgerSpin").addClass("hamburgerHide")
                $(".exitIcon").addClass("exitIconShow");
                $(this).dequeue();
            })
            $(".menuContent").toggleClass("menuShow")
        }
        else if (menuStatus === true) {
            $(".menuContent").toggleClass("menuShow")
            $(".exitIcon").removeClass("exitIconShow")
            $("#hamburgerIcon").removeClass("hamburgerHide")
            $("#hamburgerIcon").removeClass("hamburgerSpin")
        }
    })
}

portApp.events = () => {
    portApp.hamburgerClick();
}

// SMOOTH SCROLL

const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 600
});

// SCROLL ARROW TO TOP 

var btn = $("#arrow");

btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, "500");
});

// ANIMATION

AOS.init({
    duration: 1000,
});


portApp.init = () => {
    portApp.events()
}

$(function () {
    portApp.init();
});








