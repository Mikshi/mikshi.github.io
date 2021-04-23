  
  


  const animItems = document.querySelectorAll('.anim-items');

  if (animItems.length > 0 ) {
    window.addEventListener('scroll', animOnScroll);

    var header = document.getElementById("myHeader_nav");
    var hero = document.querySelector('.header-hero-section').offsetHeight;
    var sticky = header.offsetTop + hero - 40;   
    style = header.style;

    console.log('all ', sticky);
    console.log(style);
    
    function animOnScroll(params){

      if (window.pageYOffset > sticky) {
        // header.classList.add("sticky");
        style.position = "fixed";
        style.width = "100%";
        style.top = "0";
        style.left = "0";
        style.zIndex = "10";
        style.margin = "0";
        style.transition = "all 0.3s ease 0s";
      } else {
        // header.classList.remove("sticky");
        if (window.pageYOffset < sticky) {
          style.position = "static";
          style.width = "100%";
          style.top = "";
          style.left = "";
          style.zIndex = "";
          style.margin = "0";
          style.transition = "all 0.3s ease 0s";
        }
      }

      for (let index = 0; index < animItems.length; index++){
        const animItem = animItems[index];
        const animItemHeight = animItem.offsetHeight;
        const animItemOffset = offset(animItem).top;
        const animStart = 34;

        let animItemPoint = window.innerHeight - animItemHeight / animStart;

        if (animItemHeight > window.innerHeight){
          animItemPoint = window.innerHeight - window.innerHeight / animStart;
        }        

        if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
          animItem.classList.add('_active');          
        } else {
          if(!animItem.classList.contains('anim-no-hide')){            
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

  //click goto 

  let menuLinks = document.querySelectorAll('.header-hero__animation-link[data-goto]');

  if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
      menuLink.addEventListener('click', onMenuLinkClick);
    });

    function onMenuLinkClick (e) {
      const menuLink = e.target;
      if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
        const gotoBlock = document.querySelector(menuLink.dataset.goto);
        let hed = document.querySelector('.header').offsetHeight;
        const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - hed

        console.log(gotoBlock);

        window.scrollTo({
          top: gotoBlockValue,
          behavior:"smooth"
        });
        e.preventDefault();
      }
    }
  }
