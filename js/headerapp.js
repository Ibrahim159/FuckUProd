window.addEventListener('scroll', ()  => {
    const scrolled = window.scrollY;
    const optionMenu = document.getElementsByClassName('others-li');

    if(scrolled >= 718 && screen.height >=900){
        for(let i = 0; i < optionMenu.length; i++){
            optionMenu[i].classList.add('others-li_black');
        }
    }else{
        if(scrolled >= 500 && screen.height <= 800){
            for(let i = 0; i < optionMenu.length; i++){
                optionMenu[i].classList.add('others-li_black');
            }
        }else{
            for(let i = 0; i < optionMenu.length; i++){
                optionMenu[i].classList.remove('others-li_black');
            }
        }
    }
});

