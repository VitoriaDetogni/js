$(document).ready(function() {

// Para esperar o documento carregar todo para funcionar

let containerA = document.getElementById("circleA");

let circleA = new ProgressBar.Circle(containerA, {
    color:"#ff0000",
    strokeWidth: 8,
    duration: 1900,
    from: {color: "#AAA"},
    to: { color:"#A52A2A"},

    step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);

        let value = Math.round(circle.value() * 1278)

        circle.setText(value);
    }
});

let containerB = document.getElementById("circleB");

let circleB = new ProgressBar.Circle(containerB, {
    color:"#ff0000",
    strokeWidth: 8,
    duration: 1600,
    from: {color: "#AAA"},
    to: { color:"#A52A2A"},

    step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);

        let value = Math.round(circle.value() * 726)

        circle.setText(value);
    }
});

let containerC = document.getElementById("circleC");

let circleC = new ProgressBar.Circle(containerC, {
    color:"#ff0000",
    strokeWidth: 8,
    duration: 1400,
    from: {color: "#AAA"},
    to: { color:"#A52A2A"},

    step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);

        let value = Math.round(circle.value() * 427)

        circle.setText(value);
    }
});

let containerD = document.getElementById("circleD");

let circleD = new ProgressBar.Circle(containerD, {
    color:"#ff0000",
    strokeWidth: 8,
    duration: 1200,
    from: {color: "#AAA"},
    to: { color:"#A52A2A"},

    step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);

        let value = Math.round(circle.value() * 53)

        circle.setText(value);
    }
});


// iniciar quando chegar nessa parte do site

let dataAreaOffset = $('#data-area').offset();
let stop = 0;

$(window).scroll(function(e){

    let scroll = $(window).scrollTop();

    if (scroll > (dataAreaOffset.top - 500) && stop == 0 ){

        circleA.animate(1.0);
        circleB.animate(1.0);
        circleC.animate(1.0);
        circleD.animate(1.0);

        stop = 1;

    }

});

// // parallax

// setTimeout(function() {

//     $('#data-area').parallax({imageSrc: '../imagens/parallax.jpg'});

// }, 250);

});