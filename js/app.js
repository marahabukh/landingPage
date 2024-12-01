
//Define an array of section names the navigation menu
const navItems = ['Section1', 'Section2', 'Section3'];
const navList = document.getElementById('navbar__list');
//create a navigation list item

navItems.forEach(item => {
  const listItem = document.createElement('li');
  listItem.innerHTML = `<a href="#${item.toLowerCase()}">${item}</a>`;
  navList.appendChild(listItem);
});

navList.addEventListener('click', (event) => {
  event.preventDefault();

  if (event.target.nodeName === 'A') {
    const targetId = event.target.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    const offset = 50;
    const targetPosition = targetSection.offsetTop - offset;
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth',
    });
  }
});
// Scroll the page to the target sectionد
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const links = document.querySelectorAll('#navbar__list a');
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top >= 0 && rect.top <= window.innerHeight * 0.5) {  
      links.forEach(link => link.classList.remove('active'));
      const activeLink = document.querySelector(`#navbar__list a[href="#${section.id}"]`);
      activeLink.classList.add('active'); // Add the 'active' class to the link
    }
  });
});
