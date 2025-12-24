let navBenefit = document.querySelector('#benefitNav');
let section3 = document.querySelector('#benefit');
let navFlavor = document.querySelector('#navFlavor');
let section4 = document.querySelector('#section4');
let navReviews = document.querySelector('#navReviews');
let section6 = document.querySelector('#section6');
 
navBenefit.addEventListener('click',()=>{
    section3.scrollIntoView({
      behavior :"smooth"
    })
})

navFlavor.addEventListener('click',()=>{
    section4.scrollIntoView({
      behavior:'smooth'
    })
})

navReviews.addEventListener('click',()=>{
  section6.scrollIntoView({
    behavior:'smooth'
  })
})





// counter

 //  clients Counter

 function animateCount(element, target) {
    let count = 0;
    let step = Math.ceil(target / 100); // speed of increase
    let interval = setInterval(() => {
      count += step;
      if (count >= target) {
        count = target; // stop at target
        clearInterval(interval);
        element.textContent = count + '+'
      }
      else{
      element.textContent = count ;
      }
    }, 20); // update every 20ms
  }



  // Use IntersectionObserver so it starts when div is visible
  const clientDiv = document.getElementById("formulation");
  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      animateCount(clientDiv, 30); // suppose 1500 clients
      observer.disconnect(); // run only once
    }
  });

  observer.observe(clientDiv);



  // Use IntersectionObserver so it starts when div is visible
  const clientDiv1 = document.getElementById("early-access");
  const observer1 = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      animateCount(clientDiv1, 1200); // suppose 1500 clients
      observer1.disconnect(); // run only once
    }
  });

  observer1.observe(clientDiv1);



  // Use IntersectionObserver so it starts when div is visible
  const clientDiv2 = document.getElementById("flavour");
  const observer2 = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      animateCount(clientDiv2, 2); // suppose 1500 clients
      observer2.disconnect(); // run only once
    }
  });

  observer2.observe(clientDiv2);

  const clientDiv3 = document.getElementById("unnecessary-fillers");
  const observer3 = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      animateCount(clientDiv2, 0); // suppose 1500 clients
      observer2.disconnect(); // run only once
    }
  });

  observer2.observe(clientDiv3);



   
  let container4 = document.querySelector('.container4');
  let showMoreBtn = document.querySelector('.showMore') ;
  

  let createDiv = ()=>{

    setTimeout(()=>{
         let div = document.createElement('div');
    let cross = document.createElement('div');
    let invisibleContainer = document.querySelector('.invisible-container')
    div.innerHTML = invisibleContainer.innerHTML;
    invisibleContainer.style.display = 'inlineBlock';
    div.setAttribute('id','review')
    container4.parentNode.insertBefore(div,container4);
    
    div.append(cross);
    cross.addEventListener('click',()=>{
          div.remove();
          cross.remove();
    })

    cross.setAttribute('id','cross');
    cross.style.width = "8%";
    cross.style.borderTopLeftRadius = "14px";
    cross.style.borderBottomRightRadius = "14px";
    cross.style.backgroundColor = "black";
    cross.style.color = "white"
    cross.innerText = "close"
    cross.style.height = "8%";
    cross.style.cursor = "pointer";
    cross.style.textAlign = "center";
    cross.style.alignContent = "center"
    div.style.width = "65vw";
    div.style.height = "85vh";
    div.style.borderRadius = "15px"
    div.style.backgroundColor = "#f7e7deff";

    if(window.matchMedia('(max-width:800px)').matches)
    {
          div.style.height = "80%";
          cross.style.width = "26%";
          cross.style.height = "5%";
          cross.style.marginTop = "25%";
    }
    
    
    }, 500)
    
    

    
  }

  showMoreBtn.addEventListener('click',createDiv);


const desktop = gsap.matchMedia();
desktop.add('(min-width:800px)',()=>{
  let tl = gsap.timeline();
  tl.from('.A',{
    y:50,
    stagger:0.4,
    opacity:0,
    scrollTrigger:{
      scroller:'body',
      trigger:'.A',
      scrub:2,
      start:'top 85%',
      end:'top 60%'
    }
  })

  tl.from('.a',{
    y:50,
    stagger:0.4,
    opacity:0,
    scrollTrigger:{
      scroller:'body',
      trigger:'.a',
      scrub:2,
      start:'top 85%',
      end:'top 60%'
    }
  })

  tl.from('.B',{
    y:50,
    stagger:0.4,
    opacity:0,
    scrollTrigger:{
      scroller:'body',
      trigger:'.B',
      scrub:2,
      start:'top 85%',
      end:'top 60%'
    }
  })

  
  tl.from('.b',{
    y:50,
    stagger:0.4,
    opacity:0,
    scrollTrigger:{
      scroller:'body',
      trigger:'.b',
      scrub:2,
      start:'top 85%',
      end:'top 60%'
    }
  })

  tl.from('.C',{
    y:50,
    stagger:0.4,
    opacity:0,
    scrollTrigger:{
      scroller:'body',
      trigger:'.C',
      scrub:2,
      start:'top 85%',
      end:'top 60%'
    }
  })

  tl.from('.c',{
    y:50,
    stagger:0.4,
    opacity:0,
    scrollTrigger:{
      scroller:'body',
      trigger:'.c',
      scrub:2,
      start:'top 85%',
      end:'top 60%'
    }
  })

  tl.from('.D',{
    y:50,
    stagger:0.4,
    opacity:0,
    scrollTrigger:{
      scroller:'body',
      trigger:'.D',
      scrub:2,
      start:'top 85%',
      end:'top 60%'
    }
  })
})


let mobile = gsap.matchMedia();
mobile.add('(max-width:800px)',()=>{
      let tl2 = gsap.timeline();
      let menu = document.querySelector('#menu');
      let close = document.querySelector('#close');

      tl2.to('.listItems',{
          x:'100vw',
          duration:0.3
      })
      tl2.from('.item',{
          x:20,
          stagger:0.3,
          opacity:0
      })

      tl2.pause();

      menu.addEventListener('click',()=>{
        tl2.play();
      })
      close.addEventListener('click',()=>{
        tl2.reverse();
      })

      let tl3 = gsap.timeline();

  tl3.from('.A',{
    y:50,
    stagger:0.4,
    opacity:0,
    scrollTrigger:{
      scroller:'body',
      trigger:'.A',
      scrub:2,
      start:'top 95%',
      end:'top 80%'
    }
  })

  tl3.from('.a',{
    y:50,
    stagger:0.4,
    opacity:0,
    scrollTrigger:{
      scroller:'body',
      trigger:'.a',
      scrub:2,
      start:'top 95%',
      end:'top 80%'
    }
  })

  tl3.from('.B',{
    y:50,
    stagger:0.4,
    opacity:0,
    scrollTrigger:{
      scroller:'body',
      trigger:'.B',
      scrub:2,
      start:'top 95%',
      end:'top 80%'
    }
  })

  
  tl3.from('.b',{
    y:50,
    stagger:0.4,
    opacity:0,
    scrollTrigger:{
      scroller:'body',
      trigger:'.b',
      scrub:2,
     start:'top 95%',
      end:'top 80%'
    }
  })

  tl3.from('.C',{
    y:50,
    stagger:0.4,
    opacity:0,
    scrollTrigger:{
      scroller:'body',
      trigger:'.C',
      scrub:2,
     start:'top 95%',
      end:'top 80%'
    }
  })

  tl3.from('.c',{
    y:50,
    stagger:0.4,
    opacity:0,
    scrollTrigger:{
      scroller:'body',
      trigger:'.c',
      scrub:2,
      start:'top 95%',
      end:'top 80%'
    }
  })

  tl3.from('.D',{
    y:50,
    stagger:0.4,
    opacity:0,
    scrollTrigger:{
      scroller:'body',
      trigger:'.D',
      scrub:2,
     start:'top 95%',
      end:'top 80%'
    }
  })
})