
const sections = [
{
title:"SECTION 1: Greeting & Patient Identification",
image:"section01.jpg",
full:[
"Hello. How can I help you today?",
"Hello. I'm the pharmacist. I'd like to explain your medicines today.",
"May I see your prescription, please?",
"Can I confirm your name and date of birth, please?",
"For your safety, I need to confirm your identity."
],
quick:[
"Hello. I'm the pharmacist.",
"Can I confirm your name and date of birth?"
]
},
{
title:"SECTION 2: History Taking & Initial Assessment",
image:"section02.jpg",
full:["What symptoms are you experiencing?"],
quick:["What symptoms do you have?"]
}
];

const content = document.getElementById("content");
const searchInput = document.getElementById("search");
const modeSelect = document.getElementById("mode");

function render() {
  content.innerHTML = "";
  const mode = modeSelect.value;
  const q = searchInput.value.toLowerCase();

  sections.forEach(s => {
    if (q && !s.title.toLowerCase().includes(q)) return;
    const sec = document.createElement("section");
    const list = (mode==="quick"?s.quick:s.full)
      .map(i=>`<li>${i}</li>`).join("");
    sec.innerHTML = `
      <h2>${s.title}</h2>
      ${s.image ? `<img src="${s.image}" alt="section image">` : ""}
      <ul>${list}</ul>
      <div class="upload">Replace image by updating file in /images folder</div>
    `;
    content.appendChild(sec);
  });
}

searchInput.oninput = render;
modeSelect.onchange = render;
render();
