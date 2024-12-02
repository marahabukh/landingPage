const sections=['section1','section2','section3','section4'] ;
// Select the navigation list
const navbar= document.getElementById('navbar__list');
//Add the id and the name of them
sections.forEach(items=>{

  const listitems=document.createElement('li') ;
  listitems.innerHTML=  `<a href="#${items}">${items}</a>` ;
  navbar.appendChild(listitems) ;
});
//Active pass scrolling
// This code exhausted me until it fixed it
const section = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('#navbar__list a');
window.addEventListener('scroll', () => {
  

  section.forEach((section, index) => {
    const ret = section.getBoundingClientRect();
    if (ret.top <= 0 && ret.bottom >= 0) {
      // link as active
      navLinks.forEach(link => link.classList.remove('active'));
      navLinks[index].classList.add('active');
    }
    if (ret.top >= 0 && ret.top < window.innerHeight / 2) {
      
      section.classList.add("active");
      navLinks[index].classList.add("active");
    } else {

      section.classList.remove("active");
      navLinks[index].classList.remove("active");
    }
  });
});


// Add smooth scrolling to menu links onclick
navbar.addEventListener('click', (event) => {
  event.preventDefault();
  if (event.target.nodeName === 'A') {
    const tarId = event.target.getAttribute('href').substring(1);
    const tarSection = document.getElementById(tarId);

   
    if (tarSection) {
    
      const scrollOffset = 0; // if thers top space
      const targetTop = tarSection.getBoundingClientRect().top + window.scrollY - scrollOffset;

      //scrolling flexable
      window.scrollTo({
        top: targetTop,
        behavior: 'smooth'
      });
    }
  }
});

