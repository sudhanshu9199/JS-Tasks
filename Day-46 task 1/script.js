let main = document.getElementById("main");

const marvelFreelancers = [
  {
    name: "Tony Stark",
    role: "Genius Inventor",
    team: "Avengers",
    dp: "/images/Iron_Man.webp",
    status: "Available",
    rate: "₹5000/hr",
    skills: ["AI", "Weapons", "Robotics", "Sarcasm"],
    bio: "Billionaire, playboy, philanthropist. Will upgrade your tech — and ego.",
    cta: "Hire",
  },
  {
    name: "Steve Rogers",
    role: "Super Soldier",
    team: "Avengers",
    dp: "/images/Steve-Rogers.webp",
    status: "Busy fighting Hydra",
    rate: "₹1500/hr",
    skills: ["Leadership", "Shield Throwing", "Justice"],
    bio: "Will fight Nazis or bugs in your code with equal intensity.",
    cta: "Hired",
  },
  {
    name: "Thor Odinson",
    role: "God of Thunder",
    team: "Asgardians",
    dp: "images/Thor_Odinson.webp",
    status: "Available (with Mjolnir 💥)",
    rate: "₹3000/hr",
    skills: ["Electricity", "Beer Lifting", "Smashing"],
    bio: "Need lightning-fast code? Or just lightning? I’m your God.",
    cta: "Hire",
  },
  {
    name: "Bruce Banner",
    role: "Scientist / Hulk",
    team: "Avengers",
    dp: "images/hulk.webp",
    status: "Available (as Bruce), Unavailable (as Hulk)",
    rate: "₹2000/hr",
    skills: ["Gamma Radiation", "AI", "Code Refactoring"],
    bio: "Don’t make me angry — I debug better when calm.",
    cta: "Hire",
  },
  {
    name: "Natasha Romanoff",
    role: "Spy / Hacker",
    team: "Avengers",
    dp: "/images/Natasha_Romanoff.jpg",
    status: "Undercover",
    rate: "₹2500/hr",
    skills: ["Hacking", "Espionage", "Kung Fu"],
    bio: "Stealth mode ON. Your secrets are safe... or are they? 😉",
    cta: "Hire",
  },
  {
    name: "Clint Barton",
    role: "Archer",
    team: "Avengers",
    dp: "images/Clint_Barton.webp",
    status: "Busy (family time)",
    rate: "₹1000/hr",
    skills: ["Archery", "Focus", "Sharpshooting"],
    bio: "One shot, one bug fixed.",
    cta: "Hired",
  },
  {
    name: "Peter Parker",
    role: "Web Developer (literally)",
    team: "Spider-Verse",
    dp: "images/Peter_Parker.jpg",
    status: "In Class",
    rate: "₹100/hr (Student Discount!)",
    skills: ["Web Dev", "Photography", "Flipping"],
    bio: "With great power comes great programming.",
    cta: "Hire",
  },
  {
    name: "Wanda Maximoff",
    role: "Reality Bender",
    team: "Avengers",
    dp: "images/Wanda_Maximoff.webp",
    status: "Emotionally Unavailable 🥺",
    rate: "₹2500/hr",
    skills: ["Magic", "Chaos", "UI illusions"],
    bio: "Your bugs never existed. I altered reality. 💫",
    cta: "Hire",
  },
  {
    name: "Doctor Strange",
    role: "Mystic Coder",
    team: "Masters of the Mystic Arts",
    dp: "images/Doctor_Strange.webp",
    status: "Looking through 14 million outcomes...",
    rate: "₹2700/hr",
    skills: ["Time Manipulation", "Portals", "React Magic"],
    bio: "Seen every possible crash. I fixed them all. 🌀",
    cta: "Hire",
  },
  {
    name: "Loki",
    role: "God of Mischief",
    team: "Self 😏",
    dp: "images/Loki.avif",
    status: "Available (terms may vary)",
    rate: "₹666/hr",
    skills: ["Deception", "Illusions", "Scripting chaos"],
    bio: "Will cause chaos in your competitor’s codebase.",
    cta: "Hire",
  },
  {
    name: "T'Challa",
    role: "King / Tech Strategist",
    team: "Wakanda",
    dp: "images/T'Challa.webp",
    status: "Not Available (Royal duties)",
    rate: "₹5000/hr",
    skills: ["Strategy", "Vibranium Tech", "Leadership"],
    bio: "Wakanda forever. Downtime? Never.",
    cta: "Hired",
  },
  {
    name: "Shuri",
    role: "Tech Innovator",
    team: "Wakanda R&D",
    dp: "images/Shuri.jpg",
    status: "Open for Freelance",
    rate: "₹2200/hr",
    skills: ["AI", "Nano Tech", "Coding"],
    bio: "Outcoded Tony Stark in sleep once.",
    cta: "Hire",
  },
  {
    name: "Deadpool",
    role: "Merc with a Mouth",
    team: "X-Force",
    dp: "images/Deadpool.webp",
    status: "Too Available",
    rate: "₹800/hr + tacos",
    skills: ["Breaking 4th wall", "Dark humor", "Bug killing"],
    bio: "I don't write code, I *assassinate* bugs.",
    cta: "Hire",
  },
  {
    name: "Rocket Raccoon",
    role: "Engineer / Thief",
    team: "Guardians of the Galaxy",
    dp: "images/Rocket_Raccoon.webp",
    status: "Depends on mood",
    rate: "₹1200/hr",
    skills: ["Engineering", "Weapons", "Trash Talk"],
    bio: "I fix your project or steal your battery. Win-win.",
    cta: "Hire",
  },
  {
    name: "Groot",
    role: "DevOps Tree",
    team: "Guardians",
    dp: "images/Groot.jpg",
    status: "Available",
    rate: "1 branch/hr 🌱",
    skills: ["I am Groot"],
    bio: "I am Groot. (Translation: I am very skilled.)",
    cta: "Hire",
  },
  {
    name: "Gamora",
    role: "Assassin",
    team: "Guardians",
    dp: "images/Gamora.webp",
    status: "Freelancing",
    rate: "₹1800/hr",
    skills: ["Combat", "Focus", "Clean Cuts"],
    bio: "Slays bugs... literally.",
    cta: "Hire",
  },
  {
    name: "Drax",
    role: "Literal Debugger",
    team: "Guardians",
    dp: "images/Drax.webp",
    status: "Visible",
    rate: "₹1000/hr",
    skills: ["Strength", "Literal Thinking", "No Filter"],
    bio: "Metaphors go over my head. I’m too fast.",
    cta: "Hire",
  },
  {
    name: "Ant-Man",
    role: "Mini Debugger",
    team: "Avengers",
    dp: "images/ant-man.webp",
    status: "Available",
    rate: "₹900/hr",
    skills: ["Shrinking", "Heists", "Quantum"],
    bio: "I go into the code… literally.",
    cta: "Hire",
  },
  {
    name: "Wasp",
    role: "Flying Frontend",
    team: "Avengers",
    dp: "images/Wasp.jpeg",
    status: "On call",
    rate: "₹1100/hr",
    skills: ["Agility", "Clean UIs", "Fast delivery"],
    bio: "Frontend so fast, you’d think it’s React 100x.",
    cta: "Hire",
  },
  {
    name: "Nick Fury",
    role: "Project Manager",
    team: "S.H.I.E.L.D.",
    dp: "images/Nick_Fury.webp",
    status: "Always Watching",
    rate: "₹3000/hr",
    skills: ["Leadership", "Secret Ops", "Micromanaging"],
    bio: "Managing your superheroes... and your deadlines.",
    cta: "Hire",
  },
  {
    name: "Captain Marvel",
    role: "Full Stack Hero",
    team: "Space Force",
    dp: "images/Captain_Marvel.webp",
    status: "On Earth (Temporarily)",
    rate: "₹3500/hr",
    skills: ["Energy Blasts", "Space Travel", "Full Stack"],
    bio: "Cosmic energy + JS energy = BOOM!",
    cta: "Hire",
  },
  {
    name: "Venom",
    role: "Dark Dev",
    team: "Solo",
    dp: "images/vemon.jpg",
    status: "Hungry... for code",
    rate: "₹800/hr",
    skills: ["Symbiote Coding", "Dark Mode Only", "Sharp Bugs"],
    bio: "Your bugs... are *ours* now.",
    cta: "Hire",
  },
  {
    name: "Silver Surfer",
    role: "Backend Cosmic",
    team: "Galactus Inc.",
    dp: "images/Silver_Surfer.webp",
    status: "Floating freely",
    rate: "₹3200/hr",
    skills: ["Cosmic APIs", "Serverless", "Fast Delivery"],
    bio: "Delivering galactic backend performance.",
    cta: "Hire",
  },
  {
    name: "Moon Knight",
    role: "Night Coder",
    team: "Midnight Crew",
    dp: "images/Moon-Knight.webp",
    status: "Awake at night only",
    rate: "₹1400/hr",
    skills: ["Split personalities", "Night shifts", "Agile"],
    bio: "Works best under moonlight and pressure.",
    cta: "Hire",
  },
  {
    name: "Echo",
    role: "Bug Listener",
    team: "Hawkeye’s Allies",
    dp: "images/echo.avif",
    status: "Listening...",
    rate: "₹1300/hr",
    skills: ["Silent Execution", "Mimicry", "Attention to Detail"],
    bio: "Hears your bugs before you say them.",
    cta: "Hire",
  },
  {
    name: "Emma Frost",
    role: "Telepath / CEO",
    team: "X-Men / Hellfire Club",
    dp: "images/Emma_Frost.png",
    status: "Mentally Available 😉",
    rate: "₹4000/hr",
    skills: ["Telepathy", "Mind Control", "Business Savvy", "Style"],
    bio: "Brains, beauty, and diamonds. I run companies and crack minds.",
    cta: "Hire",
  },
  {
    name: "Black Cat (Felicia Hardy)",
    role: "Cat Burglar / Hacker",
    team: "Solo (Sometimes Spider-Man)",
    dp: "images/Black_Cat_(Felicia_Hardy).webp",
    status: "Slipping into your DMs",
    rate: "₹2500/hr",
    skills: ["Stealth", "Lockpicking", "Flirting with Firewalls"],
    bio: "I’ll steal your code... and maybe your heart. 🐾",
    cta: "Hire",
  },
];

function repeat() {
  let sum = "";
  marvelFreelancers.forEach((elem, idx) => {
    sum += `<div class="card">
            <div class="top-part">
                <p class="left">${elem.status}</p>
                <p class="right">${elem.rate}</p>
            </div>
            <div class="bottom-part">
                <img src="${elem.dp}" alt="${elem.name}-dp">
                <p class="name">${elem.name}</p>
                <p class="role">${elem.role}</p>
                <div class="team-div">
                    <i class="ri-building-fill team-icon"></i>
                    <p class="team">${elem.team}</p>
                </div>
                    <ul class="skills-div">
  ${elem.skills.map((skill) => `<li class="skill">${skill}</li>`).join("")}
</ul>
                <p class="bio">${elem.bio}</p>
                <hr>
                <div class="btn" id="${idx}">${elem.cta}</div>
            </div>
        </div>`;
  });
  main.innerHTML = sum;
}
repeat();

main.addEventListener("click", (dets) => {
  // event bubbling
  if (dets.target.classList.contains('btn')) {
    const idx = +dets.target.id;
    if (marvelFreelancers[idx].cta === 'Hire') {
         marvelFreelancers[idx].cta = 'For your work';
    }
    else {
        marvelFreelancers[idx].cta = 'Hire';
    }
    repeat();
}
});
