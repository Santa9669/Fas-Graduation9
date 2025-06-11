
const slides = [
  {
    title: "With Love, Arsalan",
    text: "Dear Fas, this is a little journey made with love… just for you."
  },
  {
    title: "Kabul International School",
    text: "It all started with a little girl with big dreams… determined and bright."
  },
  {
    title: "AUAF Rollercoaster",
    text: "2019 – she stepped into the world of law. Struggles, nights of tears, lessons, and victories."
  },
  {
    title: "Her Strength & Passion",
    text: "From challenges to courage. 'What is yours will come to you.'"
  },
  {
    title: "Relocation to Qatar",
    text: "She left home, crossed oceans, carried her courage with her… and kept going."
  },
  {
    title: "Graduation Celebration",
    text: "This isn’t just a graduation, it’s a celebration of your resilience. 🎓🎉"
  },
  {
    title: "Personal Message",
    text: "I have always believed in you. I know there were times I made you sad, and I’m truly sorry... This graduation means everything to me because of you."
  },
  {
    title: "People Proud of You",
    text: "Mateen, Asma, Massiha, Eman, Munawara, Hasty, Muhammad, Ahmad, Grandma… and me – Arsalan 💖"
  },
  {
    title: "LLM Dream at UPenn",
    text: "From AUAF to UPenn. The journey continues. And the world is yours."
  },
  {
    title: "Closing",
    text: "This is your story. A story of courage, love, and becoming. 🎓💐"
  }
];

let currentSlide = 0;
const app = document.getElementById('app');

function renderSlide() {
  if (currentSlide < slides.length) {
    app.innerHTML = `
      <h1>${slides[currentSlide].title}</h1>
      <p>${slides[currentSlide].text}</p>
      <button onclick='nextSlide()'>Next</button>
    `;
  } else {
    app.innerHTML = `
      <h1>Congratulations, Fas! 🎉</h1>
      <p>Replay the story?</p>
      <button onclick='restartSlide()'>Replay</button>
    `;
  }
}

function nextSlide() {
  currentSlide++;
  renderSlide();
}

function restartSlide() {
  currentSlide = 0;
  renderSlide();
}

renderSlide();
