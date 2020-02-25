AOS.init({
    easing: "ease",
    duration: 1800,
    once: true
});

AOS.init();

function redirect() {
    event.preventDefault;
    var strSubject = $("#contact-subject").val();
    var strName = $("#contact-name").val();
    var strMessage = $("#contact-body").val();
    console.log(strSubject + " STRSUBJ");
    window.location.href = "mailto:kervindelrosario@yahoo.com?subject=" + strSubject
        + "&body=" + strMessage + "%0A%0ASincerely,%0A" + strName + "&cc=kervindelrosario@gmail.com";
}