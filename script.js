const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  //all functions executed when you click on the burger.
  burger.addEventListener('click', ()=>{
    //Toggle Navigation bar to appear
    nav.classList.toggle('nav-active');
    //Animate Links rapidly moving in from right to left.
    navLinks.forEach((link, index) => {
      if(link.style.animation){
        link.style.animation='';
      }else{
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
      }
    });
    //Burger animation where three parallel lines turn into X
    burger.classList.toggle('toggle');
  });
}

navSlide();


//Function for smoothly scrolling to the target by a link tag.
function smoothScroll(target,duration){
  var target = document.querySelector(target);
  var targetPosition = target.getBoundingClientRect();
  var startPosition = window.pageYOffset;
  var distance = targetPosition.y - startPosition;
  var startTime = null;

  console.log("TargetPosition.y: " + targetPosition.y);
  console.log("StartPosition " + startPosition);
  console.log("Distance: " + distance);

  function animation(currentTime){
    console.log("startTime: " + startTime);
    console.log("currentTime: " + currentTime);

    if(startTime === null) startTime = currentTime;
    var timeElapsed = currentTime - startTime;
    var run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if(timeElapsed < duration) window.requestAnimationFrame(animation);
  }

  function ease(t, b, c, d) {
    t /= d/2;
    if ( t < 1 ) return c / 2 * t * t + b;
    t--;
    var result = -c / 2 * (t * (t - 2) - 1) + b;
    console.log(result);
    return result;
  }

  window.requestAnimationFrame(animation);
}

var contactLink = document.querySelector('.link1');
contactLink.addEventListener('click', ()=>{
  smoothScroll('.aboutWrapper', 1000);
});

var contactLink = document.querySelector('.link3');
contactLink.addEventListener('click', ()=>{
  smoothScroll('.contactTitle', 1000);
});

//Using a for loop to attach smoothScroll function to the 3 links in the nav-link.
// var element = document.getElementById("nav-links");
// var numberOfChildren = element.children.length;
//
// for(var i = 1; i < numberOfChildren; i++){
//   var contactLink = document.querySelector('.link'+i);
//   contactLink.addEventListener('click', ()=>{
//     smoothScroll(`[data-link-id="${i}"]`, 1000);
//   });
// }
