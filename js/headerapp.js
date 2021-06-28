window.addEventListener('scroll', ()  => {
    const scrolled = window.scrollY;
    const optionMenu = document.getElementsByClassName('others-li');

    console.log(scrolled);
    if(scrolled >= 718 && window.screen.width >= 1365){
        for(let i = 0; i < optionMenu.length; i++){
            optionMenu[i].style.color = ("#000");
            optionMenu[i].style.borderColor = ("#000");
        }
    }else{
        if(scrolled >= 631 && window.screen.width <= 1200){
            for(let i = 0; i < optionMenu.length; i++){
                optionMenu[i].style.color = ("#000");
                optionMenu[i].style.borderColor = ("#000");
            }
        }else{
            for(let i = 0; i < optionMenu.length; i++){
                optionMenu[i].style.color = ("#fff");
                optionMenu[i].style.borderColor = ("#fff");
            }
        }
    }
    
});

