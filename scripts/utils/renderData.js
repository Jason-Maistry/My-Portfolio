import personalDetails from "../data/personalDetails.js";
import interests from '../data/interests.js';
import achievements from "../data/achievements.js";
import attributes from "../data/skills.js";
import socials from "../data/contact.js";
import faqs from "../data/faqs.js";

export function renderPersonalDetails() {
  const section = document.getElementById("personalDetails");
  let content = "";

  personalDetails.forEach(detail => {
    content += `
      <div class="personalDetail">
        <span>
          <strong>${detail.key}:</strong>
        </span>
        ${detail.value}
      </div>
    `
  })

  section.innerHTML = content;
}

export function renderInterests() {
  const container = document.getElementById("interests");
  if(!container) return;

  container.innerHTML = "";

  interests.categories.forEach(cat => {
    const filteredInterest = interests.interests.filter(i => i.category === cat);

    if (filteredInterest.length === 0) return;

    const categoryDiv = document.createElement("div");
    categoryDiv.dataset.category = cat;
    categoryDiv.classList.add("interestCategory")

    categoryDiv.innerHTML = `<h3>${cat}</h3>`;

    const itemsHTML = filteredInterest
      .map(i => `
          <div class="interest">
            <div class="interestContent">
              <p class="center">${i.experience}</p>
              <button data-id="${i.id }">
                Learn More →
              </button>
            </div>
          </div>
        `)
      .join("");

    categoryDiv.innerHTML += `
        <div class="interestCategoryContent">${itemsHTML}</div>
    `;
    container.appendChild(categoryDiv);
  })

  document.querySelectorAll(".interest button").forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = e.target.dataset.id;
      const interestSection = document.getElementById("interestSection");
      const interestContainer = document.getElementById("interestContainer");

      const interest = interests.interests.find(x => x.id == id);
      let content = "";
      let qualifications = "<ul>";

      interestSection.style.display = "flex";

      content = `
        <i id="close" class="fas fa-close"></i>
        <h4 class="center">${interest.experience}</h4>
        <img src="images/experience/${interest.img}" alt="${interest.imgDescription}" width="200">
      `;

      if (interest.subcategory.length === 0) {
        interest.qualifications.forEach(qual => {
          qualifications += `
            <li>${qual}</li>
          `
        })
      } else {
        interest.subcategory.forEach(cat => {
          qualifications += `<h5>${cat.title}</h5>`
          cat.qualifications.forEach(qual => {
            qualifications += `
                <li>${qual}</li>
            `
          })
        })
      }

      qualifications += `</ul>`;

      content += `
        ${qualifications}
        <button id="closeBtn">
            Close
        </button>
      `;
      interestContainer.innerHTML = content;

      document.getElementById("close").addEventListener('click', () => {
        interestSection.style.display = "none";
      })

      document.getElementById("closeBtn").addEventListener('click', () => {
        interestSection.style.display = "none";
      })
    })
  })
}

export function renderAchievements() {
  const achievementsContainer = document.getElementById("achievements");
  let content = `<ul>`;
  let education = `<ul id="education">`;

  achievements.forEach(achievement => {
    if (typeof(achievement) === "string") {
      content += `
          <li>${achievement}</li>
      `
    } else {
      content += `
        <li>${achievement.title}</li>
      `;

      achievement.achievements.forEach(ach => {
        education += `
          <li>${ach}</li>
        `
      })

      education += `</ul>`;

      content += education;
    }

    content += `</ul>`

    achievementsContainer.innerHTML = content;
  })
}

export function renderAttributes() {
  const attributesContainer = document.getElementById("attributes");
  let content = `<ul>`;

  attributes.forEach(attr => {
    content += `
      <li>${attr}</li>
    `
  })

  content += `</ul>`;

  attributesContainer.innerHTML = content;
}

export function renderSocials() {
  const contactContainer = document.getElementById("contact");
  let content = `<div id="contactContent">`;

  socials.forEach(social => {
    content += `
      <a 
        href="${social.link}" 
        target="_blank"
        rel="noopener noreferrer"
      >
        <img 
          src="images/socials/${social.img}" 
          alt="${social.name}" 
          title="${social.name}"
          width="50"
        >
      </a>
    `
  })

  content += `</div>`;
  contactContainer.innerHTML = content;
}

export function renderFAQs() {
  const faqContainer = document.getElementById("faqs");

  faqContainer.innerHTML = "";
  
  faqs.categories.forEach(cat => {
    const filteredFAQ = faqs.faqs.filter(f => f.category === cat);

    if (filteredFAQ.length === 0) return;

    const categoryDiv = document.createElement("div");
    categoryDiv.dataset.category = cat;
    categoryDiv.classList.add("faqCategory");

    categoryDiv.innerHTML = `<h3>${cat}</h3>`

    const itemsHTML = filteredFAQ
      .map(f => `
          <p class="question">
            ${f.question}
            <i class="fas fa-circle-chevron-down"></i>
            <i class="fas fa-circle-chevron-up"></i>
          </p>
          <p class="answer">${f.answer}</p>
        `)
      .join("");

      categoryDiv.innerHTML += `
        <div class="faqCategoryContainer">${itemsHTML}</div>
      `;

      faqContainer.append(categoryDiv);

      document.querySelectorAll(".question > i:last-of-type").forEach(arrUp => {
        const arrDown = arrUp.previousElementSibling;
        const answer = arrUp.parentElement.nextElementSibling;

        arrUp.style.display = "none";
        

        arrUp.addEventListener('click', () => {
          arrUp.style.display = "none";
          arrDown.style.display = "inline-block";
          answer.style.display = "none"
        })
      })

      document.querySelectorAll(".question > i:first-of-type").forEach(arrDown => {
        const arrUp = arrDown.nextElementSibling;
        const answer = arrDown.parentElement.nextElementSibling;

        answer.style.display = "none";

        arrDown.addEventListener('click', () => {
          arrDown.style.display = "none";
          arrUp.style.display = "inline-block";
          answer.style.display = "block";
        })
      })
  })
}