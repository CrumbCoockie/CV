document.addEventListener("DOMContentLoaded", function(){
    
    let accordeonTitle = document.querySelector(".accordeon-title");

    accordeonTitle.addEventListener("click", (el) => {
        accordeonTitle.parentNode.classList.toggle("open");
    });

});

