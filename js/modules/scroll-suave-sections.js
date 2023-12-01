export default function initScrollSuaveSections() {
  const sections = document.querySelectorAll("[data-anime]");

  if (sections.length) {
    const windowMetade = window.innerHeight * 0.8;

    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionVisivel = (sectionTop - windowMetade) < 0;
        if (sectionVisivel) {
          section.classList.add("animate");
        }
      });
    }
    window.addEventListener("scroll", animaScroll);
    animaScroll();
  }
}
