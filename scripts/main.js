import toggleMenu from './utils/toggleMenu.js';
import * as render from './utils/renderData.js';
import backToTop from './utils/backToTop.js';

toggleMenu();

const main = document.getElementById("main");
const mainContent = document.getElementById("main-content");
const portrait = document.getElementById("portrait-container");
const interestSection = document.getElementById("interestSection");
const top = document.getElementById("backToTop");


function adjustWidth() {
  const mainWidth = main.getBoundingClientRect().width;
  const portraitWidth = portrait.getBoundingClientRect().width;

  const mainContentWidth = mainWidth - portraitWidth;
  
  if (mainWidth >= 768) {
    mainContent.style.width = `${mainContentWidth}px`;
    interestSection.style.width = `${mainContentWidth}px`;
    top.style.width = `${mainContentWidth}px`;
  } else if (mainWidth < 768) {
    top.style.width = "100%";
  }
}

window.onload = adjustWidth;
window.onresize = adjustWidth;


render.renderPersonalDetails();
render.renderInterests();
render.renderAchievements();
render.renderAttributes();
render.renderSocials();
render.renderFAQs();

const copyright = document.getElementById("copyright")
copyright.innerHTML = new Date().getFullYear();

backToTop();