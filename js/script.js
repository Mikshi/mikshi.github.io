  const animItems = document.querySelectorAll('.anim-items');

  if (animItems.length > 0 ) {
    window.addEventListener('scroll', animOnScroll);
    
    
    window.onscroll = function() {myFunction()};
    
    var header = document.getElementById("myHeader");
    var sticky = header.offsetTop;    
    
    
    function animOnScroll(params){

      for (let index = 0; index < animItems.length; index++){
        const animItem = animItems[index];
        const animItemHeight = animItem.offsetHeight;
        const animItemOffset = offset(animItem).top;
        const animStart = 2;

        let animItemPoint = window.innerHeight - animItemHeight / animStart;

        if (animItemHeight > window.innerHeight){
          animItemPoint = window.innerHeight - window.innerHeight / animStart;
        }

        if (window.pageYOffset > sticky) {
          header.classList.add("sticky");
        } else {
          header.classList.remove("sticky");
        }

        if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
          if(animItem.classList.contains('header-hero__animation-wrapper')){            
            animItem.classList.add('_hide');
          }
          animItem.classList.add('_active');          
        } else {
          if(!animItem.classList.contains('anim-no-hide') && animItem.classList.contains('header-hero__animation-wrapper')){
            animItem.classList.remove('_hide');
          }else{
            animItem.classList.remove('_active');
          }
        }
      }
    }
    
    function offset(el){
      const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }
    animOnScroll();
  }
