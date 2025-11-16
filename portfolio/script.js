/* -------------------------
   DATA - edit here to update
   ------------------------- */

const site = {
  name: "Sumanth Juluri",
  role: "Salesforce Administrator & Integration Developer",
  summary:
    "Certified Salesforce Administrator with 4+ years experience in Sales Cloud & Service Cloud. Specializes in Flow-first automation, LWC, Apex REST integrations (Tally), CPQ and reporting.",
  email: "sumanthjuluri.424@gmail.com",
  phone: "+91 76740 80424",
  linkedin: "https://www.linkedin.com/in/sumanth-juluri-34b3582b9",
  address: "10-66, Shivaji Road, Narsampet, Warangal – 506132"
};

const skills = [
  "Apex & REST API",
  "Lightning Web Components (LWC)",
  "Salesforce Automations",
  "Security & Access (Profiles/Permission Sets)",
  "Integrations (OAuth, Named Credentials)",
  "Reports & Dashboards",
  "CPQ (Products & Price Rules)",
  "Data Loader & Governance",
  "HTML, CSS, JavaScript",
  "VS Code & Git"
];

const projects = [
  {
    title: "Tally - Salesforce Integration",
    subtitle: "Salesforce ↔ Tally (REST)",
    desc: "Designed and implemented near real-time sync for Orders, Invoices, Payments, Debit Notes, and JV/TDS between Salesforce and Tally using Apex REST callouts and JSON.",
    tech: ["Apex", "REST API", "Tally", "Salesforce"]
  },
  {
    title: "Restaurant Billing App",
    subtitle: "Order to invoice workflow",
    desc: "Built an end-to-end billing and inventory app using LWC, Flows and Apex. Includes barcode scanning and Firebase integration for realtime updates.",
    tech: ["LWC", "Flow", "Firebase", "Apex"]
  },
  {
    title: "Lead Conversion Automation",
    subtitle: "Custom Lead__c → Account/Contact/Opportunity",
    desc: "Automated conversion process creating multiple Opportunities from multi-picklist fields and navigates users to created records.",
    tech: ["Flows", "Apex", "Custom Objects"]
  }
];

const experience = [
  {
    role: "Salesforce Administrator",
    company: "Schrander Solutions — Hyderabad, India",
    period: "Oct 2023 – Present",
    bullets: [
      "Built Flow-first automation replacing legacy Process Builder.",
      "Integrated Salesforce with Tally to automate invoice creation and reconciliation.",
      "Designed secure access with OWDs, sharing rules, profiles and permission sets."
    ]
  },
  {
    role: "Process Executive",
    company: "Randstad Technologies — Hyderabad, India",
    period: "Oct 2021 – Jul 2023",
    bullets: [
      "Managed customer process workflows and CRM tooling.",
      "Provided backend support for data collection and reporting."
    ]
  }
];

const education = [
  {
    degree: "B. Tech in Electronics & Communication Engineering",
    school: "Jayamukhi Institute of Technological Sciences",
    year: 2019
  },
  { degree: "Intermediate", school: "Pragna Junior College", year: 2015 },
  { degree: "SSC", school: "Wisdom High School", year: 2013 }
];

const certifications = [
  "Salesforce Certified Administrator",
  "Salesforce AI Associate"
];

/* -------------------------
   RENDERING - do not change
   ------------------------- */

function el(q) { return document.querySelector(q) }

function fillHero(){
  el("#site-name").textContent = site.name;
  el("#site-role").textContent = site.role;
  el("#hero-name").textContent = site.name;
  el("#hero-summary").textContent = site.summary;
  el("#hero-email").href = `mailto:${site.email}`;
  el("#hero-email").textContent = "Email";
  el("#hero-linkedin").href = site.linkedin;
  el("#profile-img").src = "assets/profile.jpg";
  el("#footer-year").textContent = new Date().getFullYear();
  el("#footer-name").textContent = site.name;
}

function renderSkills(){
  const grid = el("#skills-grid");
  grid.innerHTML = "";
  skills.forEach(s => {
    const d = document.createElement("div");
    d.className = "skill-card card";
    d.textContent = s;
    grid.appendChild(d);
  });
}

function renderProjects(){
  const grid = el("#projects-grid");
  grid.innerHTML = "";
  projects.forEach(p => {
    const card = document.createElement("div");
    card.className = "project-card card";
    card.innerHTML = `
      <h3>${p.title}</h3>
      <p style="color:var(--muted);margin:6px 0">${p.subtitle || ""}</p>
      <p>${p.desc}</p>
      <div style="margin-top:8px;font-size:13px;color:var(--muted)">Tech: ${p.tech ? p.tech.join(", ") : ""}</div>
    `;
    grid.appendChild(card);
  });
}

function renderExperience(){
  const list = el("#experience-list");
  list.innerHTML = "";
  experience.forEach(exp => {
    const it = document.createElement("div");
    it.className = "item";
    it.innerHTML = `
      <h4>${exp.role}</h4>
      <div class="meta">${exp.company} · <em>${exp.period}</em></div>
      <ul>${exp.bullets.map(b => `<li>${b}</li>`).join("")}</ul>
    `;
    it.classList.add("card");
    list.appendChild(it);
  });
}

function renderEducation(){
  const list = el("#education-list");
  list.innerHTML = "";
  education.forEach(ed => {
    const it = document.createElement("div");
    it.className = "item card";
    it.innerHTML = `
      <h4>${ed.degree}</h4>
      <div class="meta">${ed.school} · ${ed.year}</div>
    `;
    list.appendChild(it);
  });
}

function renderCerts(){
  const ul = el("#cert-list");
  ul.innerHTML = certifications.map(c => `<li>${c}</li>`).join("");
}

function renderContact(){
  const box = el("#contact-box");
  box.innerHTML = `
    <div class="contact-card card">
      <strong>Email</strong>
      <div><a href="mailto:${site.email}">${site.email}</a></div>
    </div>
    <div class="contact-card card">
      <strong>Phone</strong>
      <div><a href="tel:${site.phone.replace(/\s+/g,"")}">${site.phone}</a></div>
    </div>
    <div class="contact-card card">
      <strong>LinkedIn</strong>
      <div><a href="${site.linkedin}" target="_blank">Profile</a></div>
    </div>
    <div class="contact-card card">
      <strong>Address</strong>
      <div>${site.address}</div>
    </div>
  `;
}

/* Init render */
function init(){
  fillHero();
  renderSkills();
  renderProjects();
  renderExperience();
  renderEducation();
  renderCerts();
  renderContact();

  // simple fade-in for section titles
  window.addEventListener("scroll", () => {
    document.querySelectorAll(".section-title").forEach((el) => {
      const top = el.getBoundingClientRect().top;
      if (top < window.innerHeight - 50) {
        el.style.opacity = 1;
        el.style.transform = "translateY(0)";
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", init);

/* -------------------------
   HOW TO ADD NEW ITEMS
   -------------------------
 - Add a new skill:
     skills.push("New Skill");

 - Add a new project:
     projects.push({
       title: "New Project",
       subtitle: "Short subtitle",
       desc: "Description...",
       tech: ["Apex","LWC"]
     });

 - Add new experience:
     experience.push({ role:"...", company:"...", period:"...", bullets:["..."] });

After editing script.js, commit & push to GitHub — changes appear immediately.
*/





