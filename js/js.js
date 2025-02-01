


// Show the preloader initially
const preloader = document.querySelector('.preloader');
preloader.style.display = 'flex'; 

setTimeout(() => {
    preloader.classList.add('hidden'); 
}, 1000); 



//growing-image small animation

gsap.registerPlugin(ScrollTrigger);
const initialWidth = 35; 
const maxWidth = 80; 
const minWidth = 25; 


ScrollTrigger.create({
    trigger: ".growing-image.small",
    start: "top bottom", 
    end: "bottom top", 
    scrub: true, 
    onUpdate: (self) => {
        const progress = self.progress; 
        const newWidth = initialWidth + (maxWidth - initialWidth) * progress; 
        gsap.to(".growing-image.small", { width: newWidth + "%" });
    }
});



// menu hover style start
const navMenuItems = document.querySelectorAll('.nav-menu-items');

navMenuItems.forEach(menu => {
    const navLinks = menu.querySelectorAll('.nav-link');
    const navLinkLine = menu.querySelector('.nav-link-line');

    navLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            navLinkLine.style.width = '70%'; 
            navLinkLine.style.backgroundColor = 'var(--dark-outline)';

            if (link.classList.contains('left')) {
                navLinkLine.style.transform = 'translateX(-15px)';
            } else if (link.classList.contains('right')) {
                navLinkLine.style.transform = 'translateX(15px)'; 
            }
        });

        link.addEventListener('mouseout', () => {
            navLinkLine.style.width = '100%'; 
            navLinkLine.style.transform = 'translateX(0)';
            navLinkLine.style.backgroundColor = ''; 
        });
    });
});


// button outline hover animation
const buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
    const outline = button.querySelector('.button-outline');

    button.addEventListener('mousemove', (e) => {
        const rect = button.getBoundingClientRect();
        
        // Calculate the center position of the button
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        // Calculate the offset based on cursor position
        const offsetX = Math.min(Math.max(e.clientX - centerX, -10), 10); // Limit to -20 to 20
        const offsetY = Math.min(Math.max(e.clientY - centerY, -10), 10); // Limit to -20 to 20

        // Set the new position of the outline
        outline.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    });

    button.addEventListener('mouseleave', () => {
        // Reset the outline position when the mouse leaves the button
        outline.style.transform = 'translate(0, 0)';
    });
});



// menu start
$(".menu").on('click', function () {
    var selector = $("body");

    if (selector.hasClass('open')) {
        selector.removeClass('open');
    } else {
        selector.addClass('open');
    }
});


$(".nav-link").on('click', function () {
    $("body").removeClass('open');
});




let SwiperTop = new Swiper(".swiper--top", {
    spaceBetween: 0,
    centeredSlides: true,
    speed: 6000,
    autoplay: {
      delay: 2
    },
    loop: true,
    slidesPerView: "auto",
    allowTouchMove: false,
    disableOnInteraction: true
  });
  
  let SwiperBottom = new Swiper(".swiper--bottom", {
    spaceBetween: 0,
    centeredSlides: true,
    speed: 6000,
    autoplay: {
      delay: 1,
      reverseDirection: true
    },
    loop: true,
    loopedSlides: 4,
    slidesPerView: "auto",
    allowTouchMove: false,
    disableOnInteraction: true
  });
  
  


  