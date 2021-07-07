import $ from "jquery";
window.addEventListener("scroll", function(){
    var header = this.document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY >0 )
});

window.addEventListener("scroll", function(){
    if (window.scrollY >900 ){
        $("header").addClass("hide");
    }
    else{
        $("header").removeClass("hide");
    }
});