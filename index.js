function optimal_em() {
    console.log("Window width", $(window).width());
    let fsz = 1.5 * $(window).width() / 100;
    console.log(fsz);
    if (fsz < 17) {
        fsz = 17;
    }
    if (fsz > 21) {
        fsz = 21
    }
    $("html").css("font-size", fsz);
    console.log("The value", $("body").css("font-size"))
}

function scrollFadeIn() {
    $('.zero-opacity').each(function (i) {
        let top_of_object = $(this).offset().top;
        let top_of_window = $(window).scrollTop();
        let bottom_of_object = top_of_object + $(this).outerHeight();
        let bottom_of_window = top_of_window + $(window).height();
        if (bottom_of_window > top_of_object && top_of_window < bottom_of_object) {
            $(this).addClass('full-opacity');
        }
        else {
            $(this).removeClass('full-opacity');
        }
    });
}

function scrollFunc() {
    scrollFadeIn();
    navColoring();
}

$(document).ready(function () {
    optimal_em();
    scrollFadeIn();
    $(window).scroll(scrollFunc);

    $(window).on('resize', optimal_em);
    $(window).on('resize', scrollFadeIn);
});

const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(".nav .nav-item");

function navColoring() {
    console.log('debug.sections', sections);
    console.log('debug.NavLi', navLi);

    var current = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 60) {
            current = section.getAttribute("id");
        }
    });

    console.log('debug.current', current);


    navLi.forEach((li) => {
        li.classList.add("text-black-nav");
        if (li.classList.contains(current)) {
            li.classList.remove("text-black-nav");
        }
    });
};

document.addEventListener("DOMContentLoaded", function () {
    new TypeIt("#intro-type", {
        speed: 50
    })
    .pause(1000)
    .type("I'm <span style='color:#bfbfbf'>Abhi[nav]</span>")
    .options({speed: 500})
    .pause(100)
    .type("<br/>")
    .pause(100)
    .type("<br/>")
    .pause(100)
    .options({speed: 50})
    .type("A mindful software engineer with a multi-faceted outlook on problems.")
    .go();
  });

  