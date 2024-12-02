const section=['section1','section2','section3','section4'] ;
// Select the navigation list
const navbar= document.getElementById('navbar__list');
//Add the id and the name of them
section.forEach(items=>{

  const listitems=document.createElement('li') ;
  listitems.innerHTML=  `<a href="#${items}">${items}</a>` ;
  navbar.appendChild(listitems) ;
});
//Active pass scrolling
window.addEventListener('scroll', () => {
  const sec = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('#navbar__list a');

  sections.forEach((sec, index) => {
    const ret = sec.getBoundingClientRect();
    if (ret.top <= 0 && ret.bottom >= 0) {
      // link as active
      navLinks.forEach(link => link.classList.remove('active'));
      navLinks[index].classList.add('active');
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
