var menuBtn = document.getElementById("menuBtn");
var menu = document.getElementById("menu");

var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

// //Commentaire
const testimonials = [
  {
    image: "images/logo.png",
    name: "LOLA",
    job: "Adhérente OnlyFlam",
    testimonial:
      "Travailler avec cette agence a été une aventure extraordinaire ! Leur expertise et leur soutien ont véritablement propulsé ma carrière sur MYM. Je suis enchantée des résultats que nous avons atteints ensemble, une véritable équipe gagnante",
  },
  {
    image: "images/logo.png",
    name: "MANON",
    job: "Adhérente OnlyFlam",
    testimonial:
      "Cette agence a dépassé toutes mes attentes. Leur approche professionnelle, leurs conseils perspicaces, et leur gestion efficace ont simplifié mon parcours, me permettant de me concentrer pleinement sur la création de contenu tout en maximisant les revenus.",
  },
  {
    image: "images/logo.png",
    name: "CLÉMENCE",
    job: "Adhérente OnlyFlam",
    testimonial: "Rejoindre cette agence a été une décision qui a changé la donne pour moi. L'équipe dévouée a offert une flexibilité appréciable, permettant une gestion transparente de mon compte. Je suis non seulement satisfaite, mais également reconnaissante. Je recommande chaleureusement leurs services à toute modèle ambitieuse cherchant à briller sur MYM .",
  },
];

// slide en cour
let i = 0;

//Slide total
let j = testimonials.length;

let testimonialContainer = document.getElementById("testimonial-container");

let prevBtn = document.getElementById("prev");
let nextBtn = document.getElementById("next");

prevBtn.addEventListener("click", () => {
  i = (j + i - 1) % j;
  displayTestimonial();
});
nextBtn.addEventListener("click", () => {
  i = (j + i + 1) % j;
  displayTestimonial();
});

let displayTestimonial = () => {
  testimonialContainer.innerHTML = `
    <img src= ${testimonials[i].image}>
    <h3>${testimonials[i].name}</h3>
    <h6>${testimonials[i].job}</h6>
    <p>${testimonials[i].testimonial}</p>
    `;
};

window.onload = displayTestimonial;


