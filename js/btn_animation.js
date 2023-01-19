const btn_animation = document.querySelector('.btn_animation');
btn_animation.onmoucemove = function(e){
    const x=e.pageX - btn_animation.offsetLeft;
    const y=e.pageY - btn_animation.offsetTop;
    
    btn_animation.style.setProperty('--x', x +'px');
    btn_animation.style.setProperty('--y', y +'px');
}