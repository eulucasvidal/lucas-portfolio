export default function initScrollSuaveSections() {
  const sections = document.querySelectorAll(".js-scroll");

  if (sections.length) {
    const windowMetade = window.innerHeight * 0.7;

    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionVisivel = sectionTop - windowMetade < 0;
        if (sectionVisivel) {
          section.classList.add("ativo");
        }
      });
    }
    animaScroll();

    window.addEventListener("scroll", animaScroll);
  }
}
