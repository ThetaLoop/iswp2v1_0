let pageUpBtn = document.getElementById("page_up_btn");      
window.onscroll = function() {scrollFunction()};      
function scrollFunction() {
    if (document.body.scrollTop > 180 || document.documentElement.scrollTop > 180) {
        pageUpBtn.style.display = "block";
    } else {
        pageUpBtn.style.display = "none";
    }
}      
function topFunction() {
    window.scrollTo({top: 0, behavior: "smooth"})
    // document.body.scrollTop = 0;
    // document.documentElement.scrollTop = 0;
}