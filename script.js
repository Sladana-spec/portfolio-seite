let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");


window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  } else {
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }
};

let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");


menuBtn.onclick = function () {
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
  scrollBtn.style.pointerEvents = "none";
};

const hideNavMenu = () => {
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
};

cancelBtn.onclick = hideNavMenu;


let navLinks = document.querySelectorAll(".menu li a");
navLinks.forEach((link) => {
  link.addEventListener("click", hideNavMenu);
});


const translations = {
  en: {
    about: "About Me",
    skills: "Skills",
    services: "Services",
    portfolio: "Portfolio",
    contact: "Contact",
    greeting1: "Hello,",
    greeting2: "I'm Slađana",
    greeting3: "Web Designer and UI/UX Designer",
    download: "Download CV",
    aboutTitle: "About Me",
    aboutTopic: "Design is my passion",
    aboutText: "I’m Slađana Pastuhovic, a Web and UI/UX Designer. I also have a degree in graphic design software and am well versed in editing programs. I am very responsible, reliable, and enjoy creativity.",
    mySkills: "My Skills",
    myServices: "My Services",
    myProjects: "MY PROJECTS",
    contactMe: "Contact Me"
  },
  de: {
    about: "Über mich",
    skills: "Kompetenzen",
    services: "Services",
    portfolio: "Portfolio",
    contact: "Kontakt",
    greeting1: "Hallo,",
    greeting2: "Ich bin Slađana",
    greeting3: "Webdesignerin und UI/UX Designerin",
    download: "Lebenslauf herunterladen",
    aboutTitle: "Über mich",
    aboutTopic: "Design ist meine Leidenschaft",
    aboutText: "Ich bin Slađana Pastuhovic,bin Web- und UI/UX Designerin.Ich habe auch Grafiksoftware abgeschlossen und kenne mich gut mit den Bearbetungsprogrammen aus. Ich bin sehr verantwortlich, zuverlassig und mag Kreativität.",
    mySkills: "Meine Kompetenzen",
    myServices: "Meine Services",
    myProjects: "MEINE PROJEKTE",
    contactMe: "Kontakt aufnehmen"
  }
};

function setLanguage(lang) {
  const t = translations[lang];
  document.querySelector(".menu a[href='#about']").textContent = t.about;
  document.querySelector(".menu a[href='#skills']").textContent = t.skills;
  document.querySelector(".menu a[href='#services']").textContent = t.services;
  document.querySelector(".menu a[href='#portfolio']").textContent = t.portfolio;
  document.querySelector(".menu a[href='#contact']").textContent = t.contact;

  document.querySelector(".text-one").textContent = t.greeting1;
  document.querySelector(".text-two").textContent = t.greeting2;
  document.querySelector(".text-three").textContent = t.greeting3;
  document.querySelectorAll(".btn")[0].textContent = t.download;
  document.querySelectorAll(".btn")[1].textContent = t.download;

  document.querySelector("#about .title span").textContent = t.aboutTitle;
  document.querySelector(".about-details .topic").textContent = t.aboutTopic;
  document.querySelector(".about-details .right p").textContent = t.aboutText;
  document.querySelector("#skills .title span").textContent = t.mySkills;
  document.querySelector("#services .title span").textContent = t.myServices;
  document.querySelector(".portfolio h3").textContent = t.myProjects;
  document.querySelector("#contact .title span").textContent = t.contactMe;
}

document.getElementById("en-btn").addEventListener("click", () => setLanguage("en"));
document.getElementById("de-btn").addEventListener("click", () => setLanguage("de"));
