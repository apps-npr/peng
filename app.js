
const sections = [
{
title:"SECTION 1: Greeting & Patient Identification",
image:"/section01.png",
full:[
"Hello. How can I help you today?",
"Hello. I'm the pharmacist. I'd like to explain your medicines today.",
"May I see your prescription, please?",
"Can I confirm your name and date of birth, please?",
"For your safety, I need to confirm your identity.",
"Are you picking up medicine for yourself or for someone else?",
"Is the patient here with you today?",
"If not, please ensure to pass on these instructions to the patient.",
"Are you familiar with these medications?",
"Thank you for your patience.",
"Sorry to keep you waiting."
],
quick:[
"Hello. I'm the pharmacist.",
"Can I confirm your name and date of birth?"
]
},
{
title:"SECTION 2: History Taking & Initial Assessment",
image:"/section02.png",
full:[
"What symptoms are you experiencing?",
"How long have you had these symptoms?",
"How severe is your pain on a scale of 0 to 10?",
"Is there anything that makes your symptoms better or worse?",
"Do you have chest pain or shortness of breath?",
"Can you describe the pain? Is it sharp, dull, or throbbing?",
"Does the pain spread/radiate anywhere else?"
],
quick:[
"What symptoms do you have?",
"How long have you had them?"
]
},
{
    title: "SECTION 3: Drug Allergy History Taking",
    image:"/section03.png",
    full:[
      "Do you have any drug allergies?",
      "Which medicine are you allergic to?",
      "What reaction did you have?",
      "Did you have rash, swelling, or difficulty breathing?",
      "I will document this allergy in your medical record.",
      "Have you taken this medication or similar ones before without any problems?",
      "How soon after taking the medicine did the reaction start?",
      "Has a doctor ever confirmed this allergy?",
      "Do you carry a drug allergy card or a medical alert bracelet?",
      "May I see your allergy card to record the details correctly?",
      "I will verify that this new medicine does not belong to the same group.",
      "This medication is from a different class, so it should be safe for you.",
      "Just to be safe, please stop taking it immediately if you notice any rash."
    ],
    quick: [
      "Any drug allergy?",
      "Which medicine?"
    ]
  },
  {
    title: "SECTION 4: Medication Reconciliation",
    image:"/section04.png",
    full: [
      "Can you tell me all the medicines you are currently taking?",
      "Are you taking any over-the-counter medicines?",
      "Are you taking herbal products or supplements?",
      "Have you started or stopped any medicines recently?",
      "Do you use any eye drops, nasal sprays, or inhalers?",
      "Are you using any creams, ointments, or patches?",
      "What about injections, like insulin?",
      "How do you take this medication at home?",
      "Do you take this exactly as written on the label?",
      "It is common to forget doses sometimes. How often do you miss a dose?",
      "Do you have any trouble taking your medicines?",
      "Did you bring your current medications with you today?",
      "Do you have a list of your medications on your phone or in your wallet?",
      "Do you take any blood thinners, like Warfarin or Aspirin?",
      "Do you take painkillers regularly?",
      "Do you know what this pill is for?"
    ],
    quick: [
      "What medicines are you taking now?"
    ]
  },
  {
    title: "SECTION 5: Hospital Workflow Communication",
    image:"/section05.png",
    full: [
      "Please proceed to the cashier to make your payment.",
      "Please proceed to the finance counter to clear your bill.",
      "After payment, please bring the receipt back to the pharmacy.",
      "Please return to the nursing station for the injection.",
      "Please take a seat and wait for your number to be called.",
      "Please watch the screen for your queue number.",
      "The waiting time is approximately 15-20 minutes.",
      "We will call your name when your medicine is ready.",
      "Here is your appointment slip for your next visit.",
      "Please verify your name on the receipt before leaving.",
      "Please take this medicine to the treatment room."
    ],
    quick: [
      "Please pay at the cashier first."
    ]
  },
  {
    title: "SECTION 6: Dispensing & General Instructions",
    image:"/section06.png",
    full: [
      "Here is your medication.",
      "Please take this medicine exactly as prescribed.",
      "Take one tablet twice a day after meals.",
      "Take this medicine 30 minutes before meals.",
      "Take it on an empty stomach.",
      "Take one tablet in the morning and one at bedtime.",
      "Take one tablet every 4 to 6 hours as needed for pain/fever.",
      "Do not exceed 4-8 tablets in 24 hours.",
      "Stop taking this medicine once your symptoms improve.",
      "Do not drink alcohol while taking this medicine.",
      "This medicine may make you drowsy/sleepy.",
      "Please avoid driving or operating heavy machinery.",
      "Take this with food or immediately after a meal to prevent stomach upset.",
      "You must finish the entire course of antibiotics.",
      "Do not stop taking it even if you feel better.",
      "Swallow the tablet whole. Do not crush, chew, or break it.",
      "Dissolve the tablet in a glass of water before drinking.",
      "If you miss a dose, take it as soon as you remember.",
      "If it is close to your next dose, skip the missed dose. Do not double the dose.",
      "Keep this medicine in the refrigerator, but do not freeze it.",
      "Store in a cool, dry place, away from direct sunlight."
    ],
    quick: [
      "Take one tablet twice a day after meals."
    ]
  },
  {
    title: "SECTION 7: Route-Specific Counseling",
    image:"/section07.jpg",
    full: [
      "Swallow the tablet whole with a full glass of water.",
      "Apply a thin layer to the affected area. Do not bandage unless told to.",
      "Tilt your head back, pull down your lower eyelid, and put one drop into the pocket.",
      "Close your eyes gently and press the inner corner for 1-2 minutes.",
      "Shake the inhaler well before use.",
      "Rinse your mouth with water after using this inhaler to prevent oral thrush.",
      "Remove the foil wrapper before inserting the suppository.",
      "Rotate the injection site each time to avoid skin problems."
    ],
    quick: [
      "Use as instructed on the label.",
      "Show me how you use this device."
    ]
  },
  {
    title: "SECTION 8: High-Risk Medications",
    image:"/section08.jpg",
    full: [
      "This medicine has a high risk of serious side effects.",
      "Do not stop this medicine suddenly.",
      "Report unusual bleeding or low blood sugar immediately.",
      "This medicine (e.g., Warfarin) thins your blood.",
      "Please try to keep your intake of green leafy vegetables consistent.",
      "Use a soft toothbrush and be careful when using sharp objects.",
      "If you notice any unusual bruising, bleeding gums, or dark stools, tell your doctor.",
      "For insulin, keep it in the fridge before opening. Once opened, it can stay at room temperature for 30 days.",
      "Report signs of low blood sugar: shaking, sweating, or confusion."
    ],
    quick: [
      "This is a high-risk medicine.",
      "Watch for bleeding."
    ]
  },
  {
    title: "SECTION 9: Renal / Hepatic Considerations",
    image:"/section09.jpg",
    full: [
      "Do you have kidney or liver disease?",
      "This medicine may need dose adjustment.",
      "Since you have kidney issues, we have adjusted the dose for you.",
      "Avoid taking NSAIDs (like Ibuprofen/Naproxen) as they can affect your kidneys.",
      "Limit or avoid alcohol consumption to protect your liver.",
      "This medication might affect your liver enzymes, so the doctor will schedule a blood test."
    ],
    quick: [
      "Any kidney or liver disease?",
      "Dose adjusted for safety."
    ]
  },
  {
    title: "SECTION 10: Pregnancy & Breastfeeding",
    image:"/section10.jpg",
    full: [
      "Are you pregnant, planning to become pregnant, or breastfeeding?",
      "This medicine is not recommended during pregnancy.",
      "Please consult your obstetrician before taking this medication.",
      "This drug may pass into breast milk, so it is best to take it after breastfeeding.",
      "There are safer alternatives available for pregnant women. Let me check for you."
    ],
    quick: [
      "Are you pregnant or breastfeeding?",
      "Consult doctor first."
    ]
  },
  {
    title: "SECTION 11: Missed Dose & Overdose",
    image:"/section11.jpg",
    full: [
      "If you miss a dose, take it as soon as you remember.",
      "However, if it is almost time for your next dose, skip the missed one.",
      "Never take two doses at the same time to make up for a missed one.",
      "Do not double the dose.",
      "If you or someone else takes too much, go to the Emergency Room immediately.",
      "Keep the poison control center number handy."
    ],
    quick: [
      "Do not double the dose.",
      "Skip if near next dose."
    ]
  },
  {
    title: "SECTION 12: Drug Interactions",
    image:"/section12.jpg",
    full: [
      "Avoid milk, calcium, grapefruit, and alcohol.",
      "Avoid drinking milk or taking antacids within 2 hours of this medicine.",
      "Grapefruit juice can interact with this medicine. Please avoid it.",
      "Do not drink alcohol while on this medication.",
      "Please tell me if you are taking any herbal products or vitamins.",
      "This medicine might interfere with your birth control pills."
    ],
    quick: [
      "Avoid alcohol and milk.",
      "Separate from antacids."
    ]
  },
  {
    title: "SECTION 13: Storage & Stability",
    image:"/section13.jpg",
    full: [
      "Store at room temperature.",
      "Keep away from heat, light, and moisture.",
      "Keep this in the refrigerator (2-8°C). Do not freeze.",
      "Once opened, this eye drop is good for only 30 days.",
      "Keep all medicines out of reach and sight of children.",
      "Do not leave this medicine in a hot car."
    ],
    quick: [
      "Store at room temperature.",
      "Keep away from children."
    ]
  },
  {
    title: "SECTION 14: Infection Control & Hygiene",
    image:"/section14.jpg",
    full: [
      "Wash your hands thoroughly before and after using this medicine.",
      "Do not share this medicine or device with anyone else.",
      "Clean the device/inhaler regularly.",
      "Do not touch the tip of the bottle to your eye or any surface.",
      "Dispose of used needles in a sharps container."
    ],
    quick: [
      "Wash hands before use.",
      "Do not share."
    ]
  },
  {
    title: "SECTION 15: Side Effects Counseling",
    image:"/section15.jpg",
    full: [
      "This medicine may cause some side effects.",
      "Common side effects include nausea, headache, or dizziness. These usually go away.",
      "Your urine may turn reddish-orange; this is normal and harmless.",
      "Seek help if severe symptoms occur.",
      "If the side effects are bothersome, please come back to see us.",
      "This medication might make your skin sensitive to sunlight. Use sunscreen."
    ],
    quick: [
      "Some side effects may occur.",
      "Nausea is common."
    ]
  },
  {
    title: "SECTION 16: Emergency Red Flags",
    image:"/section16.jpg",
    full: [
      "Stop taking the medicine and seek immediate medical help if you have:",
      "- Chest pain or tightness.",
      "- Shortness of breath or wheezing.",
      "- Swelling of the face, lips, or throat.",
      "- Severe allergic reaction (rash, blistering).",
      "- Uncontrolled bleeding."
    ],
    quick: [
      "Seek emergency help if severe symptoms.",
      "Stop if allergic reaction."
    ]
  },
  {
    title: "SECTION 17: Teach-Back",
    image:"/section17.jpg",
    full: [
      "Just to make sure I explained everything clearly, can you tell me how you will take this?",
      "Can you show me how you will use this inhaler?",
      "What will you do if you miss a dose?",
      "What are the warning signs you need to watch out for?"
    ],
    quick: [
      "Can you repeat how to use it?",
      "Any questions?"
    ]
  },
  {
    title: "SECTION 18: Documentation Language",
    image:"/section18.jpg",
    full: [
      "Medication counseling provided regarding dosage and side effects.",
      "Patient demonstrated correct inhaler technique.",
      "Patient verbalized understanding of the instructions.",
      "Drug allergy documented.",
      "Drug allergy history updated.",
      "Potential drug interaction checked and managed."
    ],
    quick: [
      "Counseling done.",
      "Patient understood."
    ]
  },
  {
    title: "SECTION 19: Pharmacy Vocabulary",
    image:"/section19.jpg",
    full: [
      "Prescription, dosage, frequency, side effect, allergy.",
      "Injection, inhaler, eye drops, ointment, refill.",
      "Generic name vs. Brand name.",
      "Contraindication (Conditions where the drug should NOT be used).",
      "Compliance / Adherence (Taking med correctly).",
      "Over-the-Counter (OTC) drugs."
    ],
    quick: [
      "Prescription, dosage."
    ]
  },
  {
    title: "SECTION 20: Closing",
    image:"/section20.jpg",
    full: [
      "Do you have any other questions for me?",
      "Everything is clear? If you have doubts later, feel free to call us.",
      "Here is our pharmacy's contact number.",
      "Please come back if you are not sure.",
      "Thank you. Take care and get well soon."
    ],
    quick: [
      "Any questions?",
      "Get well soon."
    ]
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
