const portApp = {};

portApp.hamburgerClick = () => {
    $("#hamburger").on("click", () => {
        const menuStatus = $(".menuContent").hasClass("menuShow")
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

