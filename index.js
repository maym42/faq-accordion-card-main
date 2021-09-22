$(".question").on("click", function(event) {

    let index = $(".question").index($(this));
    let answer = $(".answer").get(index);
    let arrow = $(".img-arrow").get(index);


    let state = $(this).hasClass("question-open");
    $(this).toggleClass("question-open", !state);
    $(arrow).toggleClass("img-arrow-up", !state);
    $(".illustration-box").toggleClass("illustration-box-side", !state);

    $(answer).slideToggle();
});