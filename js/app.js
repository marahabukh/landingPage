// Select the navigation list
const navList = document.getElementById('navbar__list');

// Create menu items dynamically from sections
const sections = document.querySelectorAll('section');
sections.forEach(section => {
  const listItem = document.createElement('li');
  const link = document.createElement('a');
  link.href = `#${section.id}`;
  link.textContent = section.dataset.nav;
  link.className = 'menu__link';
  listItem.appendChild(link);
  navList.appendChild(listItem);
});

// Add smooth scrolling to menu links
navList.addEventListener('click', (event) => {
  event.preventDefault();
  if (event.target.nodeName === 'A') {
    const targetId = event.target.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    // Scroll to the section smoothly
    targetSection.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
  }
});

// Highlight active section and menu item
window.addEventListener('scroll', () => {
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    const links = document.querySelectorAll('#navbar__list a');

    // Check if the section is in the middle of the viewport
    if (rect.top >= -50 && rect.top <= window.innerHeight * 0.5) {
      // Remove active class from all links
      links.forEach(link => link.classList.remove('active'));

      // Add active class to the current link
      const activeLink = document.querySelector(`#navbar__list a[href="#${section.id}"]`);
      if (activeLink) activeLink.classList.add('active');

      // Remove active class from all sections
      sections.forEach(sec => sec.classList.remove('your-active-class'));

      // Add active class to the current section
      section.classList.add('your-active-class');
    }
  });
});
