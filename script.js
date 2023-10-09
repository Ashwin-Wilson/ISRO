const observer = new IntersectionObserver((entrise) => {
    entrise.forEach((entry) =>{
        console.log(entry);
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        } else {
            entry.target.classList.add('hidden');
        }
    })
})

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el)=> observer.observe(el));