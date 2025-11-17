/* -------------------------
   SITE DATA
-------------------------- */

const site = {
  name: "Sumanth Juluri",
  role: "Salesforce Administrator",
  summary:
            "Salesforce professional with 4+ years of expertise in Sales Cloud, Service Cloud, and Custom Development. Skilled in Flows, LWC, Apex, and third-party integrations, I design scalable, user-centric solutions that boost efficiency, harness AI capabilities, and align Salesforce innovation with strategic business growth and operational excellence.",
  email: "sumanthjuluri.424@gmail.com",
  phone: "+91 76740 80424",
  linkedin: "https://www.linkedin.com/in/sumanth-juluri-34b3582b9",
};


/* -------------------------
   SKILLS
-------------------------- */

const skills = [
  "Apex & REST API",
  "Lightning Web Components (LWC)",
  "Salesforce Automations",
  "Sharing settings & Access Model",
  "Integrations (OAuth / Named Credentials)",
  "Reports & Dashboards",
  "CPQ Rules",
  "Data Loader & Migration",
  "HTML, CSS, JavaScript",
  "VS Code & Git"
];

/* -------------------------
   PROJECTS
-------------------------- */

const projects = [
  {
    title: "Tally - Salesforce Integration",
    subtitle: "REST-Based Real-Time Sync",
    desc: "Designed and implemented real-time sync for Orders, Invoices, Payments, Debit Notes, and TDS/JV.",
    tech: ["Apex", "REST API", "JSON", "Tally"]
  },
  {
    title: "Restaurant Billing App",
    subtitle: "Order to Billing Workflow",
    desc: "Created a custom billing automation using LWC + Flows with role-based access.",
    tech: ["LWC", "Flow", "Apex"]
  },
  {
    title: "Real Estate Sales Tracker",
    subtitle: "Property Lifecycle Automation",
    desc: "Custom object model & flows for complete property → lead → opportunity pipeline.",
    tech: ["Flow", "Apex", "Reports"]
  }
];

/* -------------------------
   EXPERIENCE
-------------------------- */

const experience = [
  {
    role: "Salesforce Administrator",
    company: "Schrander Solutions — Hyderabad",
    period: "Oct 2023 – Present",
    bullets: [
      "Built Flow-first automation replacing old Process Builders.",
      "Integrated Salesforce with Tally using REST callouts.",
      "Implemented secure access model using OWD, Profiles, and Permission Sets."
    ]
  },
  {
    role: "Process Executive",
    company: "Randstad Technologies — Hyderabad",
    period: "Oct 2021 – Jul 2023",
    bullets: [
      "Handled CRM workflows and backend process automation.",
      "Supported reporting and customer data management."
    ]
  }
];

/* -------------------------
   EDUCATION
-------------------------- */

const education = [
  {
    degree: "B. Tech in Electronics & Communication Engineering",
    school: "Jayamukhi Institute of Technological Sciences",
    year: 2019
  },
  {
    degree: "Intermediate",
    school: "Pragna Junior College",
    year: 2015
  },
  {
    degree: "SSC",
    school: "Wisdom High School",
    year: 2013
  }
];

/* -------------------------
   CERTIFICATIONS
-------------------------- */

const certifications = [
  "Salesforce Certified Administrator",
  "Salesforce AI Associate"
];


/* -------------------------
   Rendering Helper
-------------------------- */
function el(q) { return document.querySelector(q) }


/* -------------------------
   RENDER HERO
-------------------------- */
function fillHero(){
  el("#site-name").textContent = site.name;
  el("#site-role").textContent = site.role;

  el("#hero-name").textContent = site.name;
  el("#hero-summary").textContent = site.summary;

  el("#hero-email").href = `mailto:${site.email}`;
  el("#hero-linkedin").href = site.linkedin;

  el("#profile-img").src = "assets/profile.jpg";

  el("#footer-year").textContent = new Date().getFullYear();
  el("#footer-name").textContent = site.name;
}


/* -------------------------
   RENDER SKILLS
-------------------------- */
function renderSkills(){
  const grid = el("#skills-grid");
  grid.innerHTML = "";
  skills.forEach(s => {
    const d = document.createElement("div");
    d.className = "skill-card";
    d.textContent = s;
    grid.appendChild(d);
  });
}


/* -------------------------
   RENDER PROJECTS
-------------------------- */
function renderProjects(){
  const grid = el("#projects-grid");
  grid.innerHTML = "";
  projects.forEach(p => {
    const card = document.createElement("div");
    card.className = "project-card card";
    card.innerHTML = `
      <h3>${p.title}</h3>
      <p style="color:var(--muted);margin:6px 0">${p.subtitle}</p>
      <p>${p.desc}</p>
      <div style="margin-top:8px;font-size:13px;color:var(--muted)">
        Tech: ${p.tech.join(", ")}
      </div>
    `;
    grid.appendChild(card);
  });
}


/* -------------------------
   RENDER EXPERIENCE
-------------------------- */
function renderExperience(){
  const list = el("#experience-list");
  list.innerHTML = "";
  experience.forEach(exp => {
    const it = document.createElement("div");
    it.className = "item card";
    it.innerHTML = `
      <h4>${exp.role}</h4>
      <div class="meta">${exp.company} — <em>${exp.period}</em></div>
      <ul>${exp.bullets.map(b => `<li>${b}</li>`).join("")}</ul>
    `;
    list.appendChild(it);
  });
}


/* -------------------------
   RENDER EDUCATION
-------------------------- */
function renderEducation(){
  const list = el("#education-list");
  list.innerHTML = "";
  education.forEach(ed => {
    const it = document.createElement("div");
    it.className = "item card";
    it.innerHTML = `
      <h4>${ed.degree}</h4>
      <div class="meta">${ed.school} • ${ed.year}</div>
    `;
    list.appendChild(it);
  });
}


/* -------------------------
   RENDER CERTIFICATIONS
-------------------------- */
function renderCerts(){
  const ul = el("#cert-list");
  ul.innerHTML = certifications.map(c => `<li>${c}</li>`).join("");
}





/* -------------------------
   INIT
-------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  fillHero();
  renderSkills();
  renderProjects();
  renderExperience();
  renderEducation();
  renderCerts();

  // Fade-in animation for section titles
  window.addEventListener("scroll", () => {
    document.querySelectorAll(".section-title").forEach((el) => {
      const top = el.getBoundingClientRect().top;
      if (top < window.innerHeight - 50) {
        el.style.opacity = 1;
        el.style.transform = "translateY(0)";
      }
    });
  });
});
