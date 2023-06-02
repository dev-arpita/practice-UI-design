const filterEl = document.querySelector(".filter-container")
    menuBtn = document.querySelector(".menu-btn")
    filterElStyle = window.getComputedStyle(filterEl);
menuBtn.addEventListener("click", ()=> {
    if(filterElStyle.getPropertyValue("clip-path") === "circle(0% at 100% 0%)"){
        filterEl.style.clipPath = "circle(100% at 50% 50%)"
    }
    else {
        filterEl.style.clipPath = "circle(0% at 100% 0%)"
    }
})
//to close the box when click anywhere in the page
document.addEventListener("click", (e)=> {
    if(filterElStyle.getPropertyValue("clip-path") === "circle(100% at 50% 50%)"){
       if(!filterEl.contains(e.target))
            filterEl.style.clipPath = "circle(0% at 100% 0%)"
    }
})
