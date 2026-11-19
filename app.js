/* ============================================================
   CONTENIDO — editá solo esta sección para actualizar el sitio.
   DATA_ES = contenido en español. DATA_EN = traducción al inglés:
   hereda todo de DATA_ES (nombre, email, links, CV…) y solo
   pisa los campos que llevan texto traducible.
   Todo lo marcado con "EDITAR" es un ejemplo para reemplazar.
   ============================================================ */
const DATA_ES = {
  name: "Matías Russo",
  fullName: "Matías Rubén Russo",
  role: "Ingeniero en Sistemas de Información",
  headline: "Ciberseguridad · Fullstack · Infraestructura de redes",
  intro:
    "Me especializo en ciberseguridad (pruebas de penetración, análisis de vulnerabilidades, hardening), " +
    "desarrollo fullstack y automatización. Hoy hago investigación y docencia en ciberseguridad en la UTN FRLP.",
  email: "matias.r.russo@gmail.com",
  phone: "+54 221 3190689",
  phoneHref: "+542213190689",
  location: "Buenos Aires, Argentina",
  cv: { es: "cv/CV_Russo_Matias_Ruben_ES.pdf", en: "cv/CV_Russo_Matias_Ruben_EN.pdf" },
  links: {
    github: "https://github.com/MatyRusso22",
    linkedin: "https://www.linkedin.com/in/matias-russo22/",
    hackthebox: "",  // EDITAR (opcional)
  },
  stats: [
    { n: "UTN", l: "Ing. en Sistemas de Información" },
    { n: "C1", l: "Inglés avanzado" },
    { n: "2", l: "Roles actuales: investigación y docencia" },
    { n: "ASVS", l: "Framework de trabajo en pentesting web" },
  ],
  skills: [
    { k: "Ofensiva", v: ["Pruebas de penetración", "Análisis de vulnerabilidades", "Burp Suite", "Kali Linux", "OWASP ASVS"] },
    { k: "Desarrollo", v: ["C#", ".NET Blazor", "JavaScript", "Python", "Playwright", "APIs REST", "Git"] },
    { k: "Infraestructura", v: ["Redes MikroTik/Cisco", "Firewalls", "Hardening", "Bases de datos SQL/NoSQL"] },
  ],
  projects: [                                              // EDITAR
    {
      slug: "fondo-blanco",
      title: "Fondo Blanco",
      desc: "Red social para gente amante de la cocteleria.",
      tags: ["C#", "HTML", "Typescript", "CSS"],
      url: "https://github.com/GabScarafia/FoB",
      body: [
        "Se trata de mi proyecto final de carrera.",
        "Con mi equipo, creamos una red social para que la gente pueda compartir sus recetas de tragos favoritas, conectar con otras personas, likear sus recetas, participar de desafios...",
      ],
    },
    {
      slug: "proyecto-pentest",
      title: "Pentest a UTN FRLP",
      desc: "Investigacion de vulnerabilidades en las paginas de mi universidad.",
      tags: ["Ciberseguridad Ofensiva", "OWASP", "Hacking Etico" ],
      body: [
        "Este es mi practica supervisada.",
        "Como investigador en ciberseguridad, representando al laboratorio GIC, lideré un proyecto de pentest para mi universidad."
      ]
    },
    {
      slug:"job-bot",
      title: "Job Application Bot",
      desc: "Automatiza el aplicar a trabajos.",
      tags: ["Python", "HTML"],
      url: "https://github.com/MatyRusso22/job-application-bot",
      body: [
        "Proyecto personal que cree para facilitarme el aplicar a muchos trabajos.",
        "Este bot primero toma el CV que le des de contexto, luego va a distintos portales de empleo (LinkedIn, Glassdoor, Computrabajo, etc) y segun los tags que le des como contexto, solo aplica a los trabajos que desees (ej: si tu curriculum es puramente de desarrollador, aplica solo a trabajos de developer)",
        "Tambien es capaz de perfilar el cv segun el trabajo a aplicar, para hacerlo mas atractivo para los recuiters."
      ]
    }
  ],
  writeups: [                                              // EDITAR
    {
      slug: "maquina-ejemplo",
      title: "Máquina de ejemplo",
      platform: "HackTheBox",
      difficulty: "easy", // easy | medium | hard
      desc: "Resumen del vector de entrada y de la escalada de privilegios.",
      tags: ["Web", "Linux"],
      date: "2026-01-01",
      body: [
        "<h2>Reconocimiento</h2><p>Enumeración inicial de puertos y servicios.</p><pre>nmap -sC -sV -oN scan.txt &lt;IP&gt;</pre>",
        "<h2>Explotación</h2><p>Descripción del vector.</p>",
        "<h2>Escalada de privilegios</h2><p>Descripción.</p>",
        "<h2>Lecciones</h2><ul><li>Qué aprendiste.</li><li>Cómo se mitiga.</li></ul>",
      ],
    },
  ],

  timeline: [
    { k: "Ago 2026 – hoy", v: "Docente auxiliar de Ciberseguridad (UTN FRLP): formación en fundamentos y prácticas, y desarrollo de contenidos y actividades prácticas." },
    { k: "Mar 2026 – hoy", v: "Investigador en GIC UTN FRLP: pruebas de penetración, análisis de vulnerabilidades y malware; soporte técnico e infraestructura." },
    { k: "Jun 2024 – Ago 2025", v: "Programador fullstack en MainSolution: apps web en .NET Blazor (C#, JavaScript, HTML, CSS), APIs REST para integración con ERP, controles de ciberseguridad, firewalls y redes MikroTik/Cisco." },
  ],
  education: [
    { k: "2018 – 2026", v: "Ingeniería en Sistemas de Información — UTN FRLP" },
  ],
  languages: [
    { k: "Español", v: "Nativo" },
    { k: "Inglés", v: "C1 (avanzado)" },
    { k: "Italiano", v: "B1 (intermedio)" },
  ],
  certs: [
    "Fundamentos de la Ciberseguridad — Cisco Networking Academy",
    "Seguridad Informática y Hacking Ético — Udemy",
    "Pentesting con Kali Linux — Platzi",
    "Desarrollo Web Fullstack (React y Node.js) — Udemy",
    "Databases and SQL for Data Science with Python — Coursera",
  ],
};

/* ---------- Traducción al inglés (solo campos con texto) ---------- */
const DATA_EN = {
  ...DATA_ES,
  role: "Information Systems Engineer",
  headline: "Cybersecurity · Fullstack · Network infrastructure",
  intro:
    "I specialize in cybersecurity (penetration testing, vulnerability analysis, hardening), " +
    "fullstack development and automation. I currently do research and teaching in cybersecurity at UTN FRLP.",
  stats: [
    { n: "UTN", l: "Information Systems Engineering" },
    { n: "C1", l: "Advanced English" },
    { n: "2", l: "Current roles: research and teaching" },
    { n: "ASVS", l: "Framework I use for web pentesting" },
  ],
  skills: [
    { k: "Offensive", v: ["Penetration testing", "Vulnerability analysis", "Burp Suite", "Kali Linux", "OWASP ASVS"] },
    { k: "Development", v: ["C#", ".NET Blazor", "JavaScript", "Python", "Playwright", "REST APIs", "Git"] },
    { k: "Infrastructure", v: ["MikroTik/Cisco networking", "Firewalls", "Hardening", "SQL/NoSQL databases"] },
  ],
  
  projects: [
    {
      slug: "fondo-blanco",
      title: "Fondo Blanco",
      desc: "Social network for cocktail enthusiasts.",
      tags: ["C#", "HTML", "TypeScript", "CSS"],
      url: "https://github.com/GabScarafia/FoB",
      body: [
        "This is my university final-year project.",
        "Together with my team, we developed a social network where users can share their favorite cocktail recipes, connect with other people, like recipes, and participate in challenges..."
      ],
    },
    {
      slug: "proyecto-pentest",
      title: "Pentest at UTN FRLP",
      desc: "Vulnerability research on my university's websites.",
      tags: ["Offensive Security", "OWASP", "Ethical Hacking"],
      body: [
        "This project is part of my supervised professional practice.",
        "As a cybersecurity researcher representing the GIC laboratory, I led a penetration testing project targeting my university's web applications."
      ]
    },
    {
      slug:"job-bot",
      title: "Job Application Bot",
      desc: "Automates job applications.",
      tags: ["Python", "HTML"],
      url: "https://github.com/MatyRusso22/job-application-bot",
      body: [
        "A personal project I created to make applying to multiple jobs easier.",
        "This bot first uses the CV you provide as context, then visits different job platforms (LinkedIn, Glassdoor, Computrabajo, etc.). Based on the tags you provide as context, it only applies to the jobs you're interested in (e.g., if your resume is focused entirely on software development, it only applies to developer positions).",
        "It can also tailor your CV to each job application, making it more appealing to recruiters."
      ]
    }
  ],

  writeups: [                                              // EDITAR
    {
      slug: "maquina-ejemplo",
      title: "Example machine",
      platform: "HackTheBox",
      difficulty: "easy", // easy | medium | hard
      desc: "Summary of the entry vector and the privilege escalation.",
      tags: ["Web", "Linux"],
      date: "2026-01-01",
      body: [
        "<h2>Reconnaissance</h2><p>Initial port and service enumeration.</p><pre>nmap -sC -sV -oN scan.txt &lt;IP&gt;</pre>",
        "<h2>Exploitation</h2><p>Description of the vector.</p>",
        "<h2>Privilege escalation</h2><p>Description.</p>",
        "<h2>Lessons</h2><ul><li>What you learned.</li><li>How it is mitigated.</li></ul>",
      ],
    },
  ],

  timeline: [
    { k: "Aug 2026 – present", v: "Teaching assistant in Cybersecurity (UTN FRLP): training in fundamentals and hands-on practice, and development of content and practical activities." },
    { k: "Mar 2026 – present", v: "Researcher at GIC UTN FRLP: penetration testing, vulnerability and malware analysis; technical support and infrastructure." },
    { k: "Jun 2024 – Aug 2025", v: "Fullstack developer at MainSolution: web apps in .NET Blazor (C#, JavaScript, HTML, CSS), REST APIs for ERP integration, cybersecurity controls, firewalls and MikroTik/Cisco networks." },
  ],
  education: [
    { k: "2018 – 2026", v: "Information Systems Engineering — UTN FRLP" },
  ],
  languages: [
    { k: "Spanish", v: "Native" },
    { k: "English", v: "C1 (advanced)" },
    { k: "Italian", v: "B1 (intermediate)" },
  ],
  certs: [
    "Cybersecurity Fundamentals — Cisco Networking Academy",
    "IT Security and Ethical Hacking — Udemy",
    "Pentesting with Kali Linux — Platzi",
    "Fullstack Web Development (React and Node.js) — Udemy",
    "Databases and SQL for Data Science with Python — Coursera",
  ],
};

/* ============================================================
   TEXTOS DE LA INTERFAZ (ES / EN)
   ============================================================ */
const STR = {
  es: {
    ui: {
      skip: "Saltar al contenido", openMenu: "Abrir menú", mainNav: "Principal", available: "disponible",
      goto: "Ir a…", openSearch: "Abrir buscador", search: "Buscador",
      placeholder: "Buscar páginas, writeups, proyectos…", hint: "↑↓ navegar · Enter abrir · Esc cerrar",
      made: "Hecho a mano con HTML, CSS y JS", switchTo: "Cambiar a inglés",
      metaDesc: "Portfolio de Matías Russo: ciberseguridad, pentesting web, desarrollo fullstack e infraestructura de redes.",
    },
    nav: { inicio: "Inicio", proyectos: "Proyectos", writeups: "Writeups", "sobre-mi": "Sobre mí", cv: "CV", contacto: "Contacto" },
    diff: { easy: "Fácil", medium: "Media", hard: "Difícil" },
    kind: { page: "página", project: "proyecto", writeup: "writeup", note: "nota" },
    noResults: "Sin resultados",
    home: {
      hi: "Hola, soy", hl: "Rompo cosas", tail: " para que se puedan arreglar.",
      projects: "Ver proyectos →", writeups: "Leer writeups", cv: "Ver CV", contact: "Contacto",
      latest: "Últimos writeups", none: "Todavía no hay writeups.", featured: "Proyectos destacados",
    },
    projects: { eyebrow: "Proyectos", h1: "Lo que construí", lead: "Herramientas, automatizaciones y desarrollos propios." },
    writeups: { eyebrow: "Writeups", h1: "Máquinas y laboratorios", lead: "Resoluciones documentadas: reconocimiento, explotación, escalada y cómo se mitiga.", all: "Todos" },
    about: { eyebrow: "Sobre mí", stack: "Stack", career: "Trayectoria" },
    cv: {
      eyebrow: "Currículum", dlEs: "⬇ CV en español (PDF)", dlEn: "⬇ CV in English (PDF)",
      experience: "Experiencia", education: "Educación", certs: "Certificaciones", languages: "Idiomas",
    },
    contact: {
      eyebrow: "Contacto", h1: "Hablemos",
      lead: "Estoy disponible para proyectos de pentesting, revisiones de seguridad y desarrollo.",
      email: "Email", phone: "Teléfono", location: "Ubicación", cvTitle: "Currículum", cvText: "Descargar CV en español o en inglés",
      copied: "¡Copiado al portapapeles!"
    },
    detail: { back: "← volver", notFound: "No encontrado", notFoundText: "Esa página no existe.", repo: "Ver repositorio ↗" },
    e404: { text: "No encontré esa página.", back: "Volver al inicio" },
    portfolio: "Portfolio",
  },
  en: {
    ui: {
      skip: "Skip to content", openMenu: "Open menu", mainNav: "Main", available: "available",
      goto: "Go to…", openSearch: "Open search", search: "Search",
      placeholder: "Search pages, writeups, projects…", hint: "↑↓ navigate · Enter open · Esc close",
      made: "Handcrafted with HTML, CSS and JS", switchTo: "Switch to Spanish",
      metaDesc: "Matías Russo's portfolio: cybersecurity, web pentesting, fullstack development and network infrastructure.",
    },
    nav: { inicio: "Home", proyectos: "Projects", writeups: "Writeups", "sobre-mi": "About", cv: "Résumé", contacto: "Contact" },
    diff: { easy: "Easy", medium: "Medium", hard: "Hard" },
    kind: { page: "page", project: "project", writeup: "writeup", note: "note" },
    noResults: "No results",
    home: {
      hi: "Hi, I'm", hl: "I break things", tail: " so they can be fixed.",
      projects: "View projects →", writeups: "Read writeups", cv: "View résumé", contact: "Contact",
      latest: "Latest writeups", none: "No writeups yet.", featured: "Featured projects",
    },
    projects: { eyebrow: "Projects", h1: "What I've built", lead: "Tools, automations and personal developments." },
    writeups: { eyebrow: "Writeups", h1: "Machines and labs", lead: "Documented solutions: reconnaissance, exploitation, escalation and how it's mitigated.", all: "All" },
    about: { eyebrow: "About me", stack: "Stack", career: "Experience" },
    cv: {
      eyebrow: "Résumé", dlEs: "⬇ CV in Spanish (PDF)", dlEn: "⬇ CV in English (PDF)",
      experience: "Experience", education: "Education", certs: "Certifications", languages: "Languages",
    },
    contact: {
      eyebrow: "Contact", h1: "Let's talk",
      lead: "I'm available for pentesting projects, security reviews and development.",
      email: "Email", phone: "Phone", location: "Location", cvTitle: "Résumé", cvText: "Download my résumé in Spanish or English",
      copied: "Copied to the clipboard!"
    },
    detail: { back: "← back", notFound: "Not found", notFoundText: "That page doesn't exist.", repo: "View repository ↗" },
    e404: { text: "I couldn't find that page.", back: "Back to home" },
    portfolio: "Portfolio",
  },
};

/* ============================================================
   MOTOR DEL SITIO (router por hash, buscador, filtros, idioma)
   ============================================================ */
const $ = (s, r = document) => r.querySelector(s);
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const view = $("#view");

/* ---------- Idioma ---------- */
const DATA_BY_LANG = { es: DATA_ES, en: DATA_EN };
let lang = "es";
try { const saved = localStorage.getItem("lang"); if (saved === "es" || saved === "en") lang = saved; } catch (e) {}
let DATA = DATA_BY_LANG[lang];

// t("home.hi") -> texto en el idioma actual
const t = (key) => key.split(".").reduce((o, p) => (o == null ? o : o[p]), STR[lang]) ?? key;

const PAGE_PATHS = ["inicio", "proyectos", "writeups", "sobre-mi", "cv", "contacto"];

const tags = (arr = []) => `<div class="tags">${arr.map((x) => `<span class="tag">${esc(x)}</span>`).join("")}</div>`;

/* ---------- Vistas ---------- */
const views = {
  inicio() {
    const latest = DATA.writeups.slice(0, 3);
    return `
      <section class="hero">
        <div class="eyebrow">${esc(DATA.headline)}</div>
        <h1>${esc(t("home.hi"))} ${esc(DATA.name)}.<br><span class="accent">${esc(t("home.hl"))}</span>${esc(t("home.tail"))}</h1>
        <p class="lead">${esc(DATA.intro)}</p>
        <div class="cta">
          <a class="btn primary" href="#/proyectos">${esc(t("home.projects"))}</a>
          <a class="btn" href="#/writeups">${esc(t("home.writeups"))}</a>
          <a class="btn" href="#/cv">${esc(t("home.cv"))}</a>
          <a class="btn" href="#/contacto">${esc(t("home.contact"))}</a>
        </div>
        <div class="terminal" aria-hidden="true">
          <div class="terminal-bar"><i></i><i></i><i></i></div>
          <pre><span class="p">$</span> whoami
${esc(DATA.name.toLowerCase())}
<span class="p">$</span> cat stack.txt
${DATA.skills.map((s) => `${s.k}: ${s.v.join(", ")}`).map(esc).join("\n")}
<span class="p">$</span> _</pre>
        </div>
      </section>
      <div class="stats">${DATA.stats.map((s) => `<div class="stat"><b>${esc(s.n)}</b><span>${esc(s.l)}</span></div>`).join("")}</div>
      <h2>${esc(t("home.featured"))}</h2>
      <div class="grid">${DATA.projects.slice(0, 3).map(projectCard).join("")}</div>
      <h2>${esc(t("home.latest"))}</h2>
      <div class="grid">${latest.map(writeupCard).join("") || `<p>${esc(t("home.none"))}</p>`}</div>`;
  },

  proyectos() {
    return `
      <div class="eyebrow">${esc(t("projects.eyebrow"))}</div><h1>${esc(t("projects.h1"))}</h1>
      <p class="lead">${esc(t("projects.lead"))}</p>
      <div class="grid">${DATA.projects.map(projectCard).join("")}</div>`;
  },

  writeups() {
    const all = [...new Set(DATA.writeups.flatMap((w) => w.tags))];
    return `
      <div class="eyebrow">${esc(t("writeups.eyebrow"))}</div><h1>${esc(t("writeups.h1"))}</h1>
      <p class="lead">${esc(t("writeups.lead"))}</p>
      <div class="filters" id="filters">
        <button class="chip on" data-f="">${esc(t("writeups.all"))}</button>
        ${all.map((x) => `<button class="chip" data-f="${esc(x)}">${esc(x)}</button>`).join("")}
      </div>
      <div class="grid" id="wgrid">${DATA.writeups.map(writeupCard).join("")}</div>`;
  },

  "sobre-mi"() {
    return `
      <div class="eyebrow">${esc(t("about.eyebrow"))}</div><h1>${esc(DATA.name)}</h1>
      <div class="article">
        <p class="lead">${esc(DATA.intro)}</p>
        <h2>${esc(t("about.stack"))}</h2>
        <ul class="list">${DATA.skills.map((s) => `<li><span class="k">${esc(s.k)}</span><span>${s.v.map(esc).join(" · ")}</span></li>`).join("")}</ul>
        <h2>${esc(t("about.career"))}</h2>
        <ul class="list">${DATA.timeline.map((x) => `<li><span class="k">${esc(x.k)}</span><span>${esc(x.v)}</span></li>`).join("")}</ul>
      </div>`;
  },

  cv() {
    const rows = (arr) => `<ul class="list">${arr.map((x) => `<li><span class="k">${esc(x.k)}</span><span>${esc(x.v)}</span></li>`).join("")}</ul>`;
    return `
      <div class="eyebrow">${esc(t("cv.eyebrow"))}</div><h1>${esc(DATA.fullName)}</h1>
      <p class="lead">${esc(DATA.role)} · ${esc(DATA.headline)}</p>
      <div class="cta">
        <a class="btn primary" href="${esc(DATA.cv.es)}" download>${esc(t("cv.dlEs"))}</a>
        <a class="btn primary" href="${esc(DATA.cv.en)}" download>${esc(t("cv.dlEn"))}</a>
      </div>
      <div class="article">
        <h2>${esc(t("cv.experience"))}</h2>${rows(DATA.timeline)}
        <h2>${esc(t("cv.education"))}</h2>${rows(DATA.education)}
        <h2>${esc(t("cv.certs"))}</h2>
        <ul class="list">${DATA.certs.map((c) => `<li><span class="k">▸</span><span>${esc(c)}</span></li>`).join("")}</ul>
        <h2>${esc(t("cv.languages"))}</h2>${rows(DATA.languages)}
      </div>`;
  },

  contacto() {
    const L = DATA.links;
    return `
      <div class="eyebrow">${esc(t("contact.eyebrow"))}</div><h1>${esc(t("contact.h1"))}</h1>
      <p class="lead">${esc(t("contact.lead"))}</p>
      <div class="grid">
        <a class="card" href="mailto:${esc(DATA.email)}" data-copy="${esc(DATA.email)}"><h3>${esc(t("contact.email"))}</h3><p aria-live="polite">${esc(DATA.email)}</p></a>
        <a class="card" href="tel:${esc(DATA.phoneHref)}" data-copy="${esc(DATA.phone)}"><h3>${esc(t("contact.phone"))}</h3><p aria-live="polite">${esc(DATA.phone)}</p></a>
        <div class="card"><h3>${esc(t("contact.location"))}</h3><p>${esc(DATA.location)}</p></div>
        ${L.github ? `<a class="card" href="${esc(L.github)}" target="_blank" rel="noopener"><h3>GitHub</h3><p>${esc(L.github)}</p></a>` : ""}
        ${L.linkedin ? `<a class="card" href="${esc(L.linkedin)}" target="_blank" rel="noopener"><h3>LinkedIn</h3><p>${esc(L.linkedin)}</p></a>` : ""}
        ${L.hackthebox ? `<a class="card" href="${esc(L.hackthebox)}" target="_blank" rel="noopener"><h3>HackTheBox</h3><p>${esc(L.hackthebox)}</p></a>` : ""}
        <a class="card" href="#/cv"><h3>${esc(t("contact.cvTitle"))}</h3><p>${esc(t("contact.cvText"))}</p></a>
      </div>`;
  },
};

/* ---------- Tarjetas ---------- */
function projectCard(p) {
  return `<a class="card" href="#/proyectos/${esc(p.slug)}">
    <h3>${esc(p.title)}</h3><p>${esc(p.desc)}</p>${tags(p.tags)}</a>`;
}
function writeupCard(w) {
  return `<a class="card" data-tags="${esc(w.tags.join("|"))}" href="#/writeups/${esc(w.slug)}">
    <div class="meta"><span>${esc(w.platform)}</span><span class="badge ${esc(w.difficulty)}">${esc(t("diff." + w.difficulty) === "diff." + w.difficulty ? w.difficulty : t("diff." + w.difficulty))}</span></div>
    <h3>${esc(w.title)}</h3><p>${esc(w.desc)}</p>${tags(w.tags)}</a>`;
}

/* ---------- Detalle ---------- */
function detail(section, item) {
  const back = `<a class="back" href="#/${section}">${esc(t("detail.back"))}</a>`;
  if (!item) return `${back}<h1>${esc(t("detail.notFound"))}</h1><p>${esc(t("detail.notFoundText"))}</p>`;
  const body = (item.body || []).map((b) => (b.trim().startsWith("<") ? b : `<p>${esc(b)}</p>`)).join("");
  const extra = item.url ? `<p><a class="btn" href="${esc(item.url)}" target="_blank" rel="noopener">${esc(t("detail.repo"))}</a></p>` : "";
  return `${back}<div class="article"><div class="eyebrow">${esc(item.platform || item.date || "")}</div>
    <h1>${esc(item.title)}</h1>${tags(item.tags)}<p class="lead" style="margin-top:16px">${esc(item.desc)}</p>${body}${extra}</div>`;
}

/* ---------- Router ---------- */
const collections = () => ({ proyectos: DATA.projects, writeups: DATA.writeups});

// keepPosition = true al cambiar de idioma (no salta al tope ni roba el foco)
function route(keepPosition = false) {
  const parts = (location.hash.replace(/^#\/?/, "") || "inicio").split("/");
  const [page, slug] = parts;
  const cols = collections();
  let html, active = page;

  if (slug && cols[page]) {
    html = detail(page, cols[page].find((i) => i.slug === slug));
  } else if (views[page]) {
    html = views[page]();
  } else {
    html = `<h1>404</h1><p>${esc(t("e404.text"))} <a class="accent" href="#/inicio">${esc(t("e404.back"))}</a></p>`;
    active = "";
  }

  view.innerHTML = html;
  const label = PAGE_PATHS.includes(page) ? t("nav." + page) : t("portfolio");
  document.title = `${DATA.name} — ${label}`;
  document.querySelectorAll("#nav a").forEach((a) => a.classList.toggle("active", a.dataset.p === active));
  $("#nav").classList.remove("open");
  $("#menuBtn").setAttribute("aria-expanded", "false");
  if (!keepPosition) {
    window.scrollTo(0, 0);
    view.focus({ preventScroll: true });
  }
}

/* Filtros de writeups (delegación) */
view.addEventListener("click", (e) => {
  const chip = e.target.closest(".chip");
  if (!chip) return;
  document.querySelectorAll(".chip").forEach((c) => c.classList.toggle("on", c === chip));
  const f = chip.dataset.f;
  document.querySelectorAll("#wgrid .card").forEach((c) => {
    c.style.display = !f || c.dataset.tags.split("|").includes(f) ? "" : "none";
  });
});

/* Copiar email / teléfono al portapapeles (delegación) */
view.addEventListener("click", async (e) => {
  const card = e.target.closest("[data-copy]");
  if (!card) return;
  e.preventDefault();
  const text = card.dataset.copy;
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const ta = document.createElement("textarea");   // fallback para navegadores viejos
    ta.value = text;
    ta.style.cssText = "position:fixed;opacity:0";
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand("copy"); } finally { ta.remove(); }
  }
  const p = card.querySelector("p");
  if (!p.dataset.orig) p.dataset.orig = p.textContent;
  p.textContent = t("contact.copied");
  card.classList.add("copied");
  clearTimeout(card._t);
  card._t = setTimeout(() => {
    p.textContent = p.dataset.orig;
    delete p.dataset.orig;
    card.classList.remove("copied");
  }, 1500);
});

/* ---------- Navegación y textos estáticos ---------- */
function renderNav() {
  $("#nav").innerHTML = PAGE_PATHS.map((p) => `<a href="#/${p}" data-p="${p}">${esc(t("nav." + p))}</a>`).join("");
}

function applyStatic() {
  document.documentElement.lang = lang === "en" ? "en" : "es-AR";
  document.querySelectorAll("[data-i18n]").forEach((el) => { el.textContent = t("ui." + el.dataset.i18n); });
  document.querySelectorAll("[data-i18n-ph]").forEach((el) => { el.placeholder = t("ui." + el.dataset.i18nPh); });
  document.querySelectorAll("[data-i18n-aria]").forEach((el) => { el.setAttribute("aria-label", t("ui." + el.dataset.i18nAria)); });
  const meta = document.querySelector('meta[name="description"]');
  if (meta) meta.setAttribute("content", t("ui.metaDesc"));
  const btn = $("#langBtn");
  btn.setAttribute("aria-label", t("ui.switchTo"));
  btn.title = t("ui.switchTo");
  btn.querySelectorAll("span").forEach((s) => s.classList.toggle("on", s.dataset.l === lang));
}

function setLang(next) {
  if (next === lang) return;
  lang = next;
  DATA = DATA_BY_LANG[lang];
  try { localStorage.setItem("lang", lang); } catch (e) {}
  applyStatic();
  renderNav();
  const y = window.scrollY;
  route(true);
  window.scrollTo(0, y);
  if (!palette.hidden) renderPalette();
}

$("#langBtn").addEventListener("click", () => setLang(lang === "es" ? "en" : "es"));
$("#menuBtn").addEventListener("click", () => {
  const open = $("#nav").classList.toggle("open");
  $("#menuBtn").setAttribute("aria-expanded", String(open));
});
$("#year").textContent = new Date().getFullYear();

/* ---------- Buscador (Ctrl+K) ---------- */
const palette = $("#palette"), pInput = $("#paletteInput"), pList = $("#paletteList");
let results = [], sel = 0;

const index = () => [
  ...PAGE_PATHS.map((p) => ({ label: t("nav." + p), kind: t("kind.page"), href: `#/${p}` })),
  ...DATA.projects.map((p) => ({ label: p.title, kind: t("kind.project"), href: `#/proyectos/${p.slug}`, extra: p.tags.join(" ") })),
  ...DATA.writeups.map((w) => ({ label: w.title, kind: t("kind.writeup"), href: `#/writeups/${w.slug}`, extra: w.tags.join(" ") })),
];

function renderPalette() {
  const q = pInput.value.trim().toLowerCase();
  results = index().filter((i) => !q || `${i.label} ${i.extra || ""} ${i.kind}`.toLowerCase().includes(q));
  sel = Math.min(sel, Math.max(results.length - 1, 0));
  pList.innerHTML = results.length
    ? results.map((r, i) => `<li class="${i === sel ? "sel" : ""}" data-i="${i}"><span>${esc(r.label)}</span><small>${esc(r.kind)}</small></li>`).join("")
    : `<li><span>${esc(t("noResults"))}</span></li>`;
}
function openPalette() { palette.hidden = false; pInput.value = ""; sel = 0; renderPalette(); pInput.focus(); }
function closePalette() { palette.hidden = true; }
function go(i) { if (results[i]) { location.hash = results[i].href; closePalette(); } }

$("#paletteBtn").addEventListener("click", openPalette);
palette.addEventListener("click", (e) => { if (e.target === palette) closePalette(); });
pInput.addEventListener("input", () => { sel = 0; renderPalette(); });
pList.addEventListener("click", (e) => { const li = e.target.closest("li[data-i]"); if (li) go(+li.dataset.i); });
document.addEventListener("keydown", (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") { e.preventDefault(); palette.hidden ? openPalette() : closePalette(); return; }
  if (palette.hidden) return;
  if (e.key === "Escape") closePalette();
  else if (e.key === "ArrowDown") { e.preventDefault(); sel = Math.min(sel + 1, results.length - 1); renderPalette(); }
  else if (e.key === "ArrowUp") { e.preventDefault(); sel = Math.max(sel - 1, 0); renderPalette(); }
  else if (e.key === "Enter") { e.preventDefault(); go(sel); }
});

/* ---------- Arranque ---------- */
window.addEventListener("hashchange", () => route());
applyStatic();
renderNav();
route();
