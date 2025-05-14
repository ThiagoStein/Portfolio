// https://www.youtube.com/watch?v=g29xXRHtnIs


const myObeserver = new IntersectionObserver((entries) => {
    console.log(entries);
    entries.forEach( (entry) => {
        teste = entry.boundingClientRect.y +1;
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    })

})

const elements = document.querySelectorAll(".hidden");   

elements.forEach((element) => { myObeserver.observe(element) });