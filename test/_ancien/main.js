// Couleurs, fond et polices de titre tirés au hasard à chaque visite (comme le vrai site)
const racine = document.documentElement.style;
const accents = ["#ffdb33", "#ff6b6b", "#6ec1ff", "#7ed6a0", "#b9a7ff", "#ff9f43"].sort(() => Math.random() - 0.5);
const fonds = ["#fffdf4", "#f5f1ff", "#eef7ff", "#effaf2", "#fff4ea", "#fff1f1"];
accents.forEach((c, i) => racine.setProperty(`--c${i + 1}`, c));
racine.setProperty("--fond", fonds[Math.floor(Math.random() * fonds.length)]);

const polices = ["Audio Nugget", "Library 3 AM", "Library 3 AM Soft", "Lost Wages", "Marlboro", "Clip", "Seaside Resort NF", "Souci Sans NF", "Akka", "Husky Stash", "Spicy Sale"];
(async () => {
  const pile = [...polices].sort(() => Math.random() - 0.5);
  const prochaine = () => (pile.length ? pile.shift() : polices[Math.floor(Math.random() * polices.length)]);
  for (const el of document.querySelectorAll(".font-titre")) {
    let police = prochaine();
    for (let essai = 0; essai < polices.length; essai++) {
      try { await document.fonts.load(`32px "${police}"`); if (document.fonts.check(`32px "${police}"`)) break; } catch (e) {}
      police = prochaine();
    }
    el.style.fontFamily = `"${police}", "Archivo", sans-serif`;
  }
})();

// Bandes qui défilent
const phrases = {
  a: ["Design graphique", "Modélisation 3D", "Identités visuelles", "Blender", "Illustrator", "Animation"],
  b: ["Disponible", "On fabrique un truc ?", "BUT MMI", "Montbéliard", "Portfolio 2026"],
  c: ["Merci d'être passé", "Écris-moi", "contact@adamgosmat.com", "À bientôt"],
};
document.querySelectorAll(".bande").forEach((bande) => {
  const cle = [...bande.classList].find((c) => c.startsWith("bande--"))?.slice(7);
  const liste = phrases[cle] || phrases.a;
  const groupe = () => `<div class="groupe">${[...liste, ...liste].map((p) => `<span>${p} ✶</span>`).join("")}</div>`;
  bande.querySelector(".piste").innerHTML = groupe() + groupe();
});

// Texte « À propos » qui s'allume mot par mot
const texte = document.querySelector("[data-surligne]");
texte.innerHTML = texte.textContent.trim().split(/\s+/).map((m) => `<span>${m}</span>`).join(" ");
const spans = texte.querySelectorAll("span");
function allumer() {
  const r = texte.getBoundingClientRect();
  const p = (innerHeight * 0.8 - r.top) / (r.height + innerHeight * 0.2);
  const n = Math.round(Math.min(1, Math.max(0, p)) * spans.length);
  spans.forEach((s, i) => s.classList.toggle("allume", i < n));
}
addEventListener("scroll", allumer, { passive: true });
allumer();

// Contact : le fond change de couleur tout seul
const contact = document.querySelector("#contact");
const pastilles = document.querySelector("#pastilles");
let actuelle = 0;
const ordre = [1, 2, 3, 4, 5, 6].sort(() => Math.random() - 0.5);
function choisir(i) {
  actuelle = i;
  contact.style.background = `var(--c${ordre[i]})`;
  pastilles.querySelectorAll("button").forEach((b, k) => b.setAttribute("aria-pressed", String(k === i)));
}
ordre.forEach((n, i) => {
  const b = document.createElement("button");
  b.style.background = `var(--c${n})`;
  b.setAttribute("aria-label", `Fond ${i + 1}`);
  b.addEventListener("click", () => choisir(i));
  pastilles.append(b);
});
choisir(0);
if (!matchMedia("(prefers-reduced-motion: reduce)").matches) setInterval(() => choisir((actuelle + 1) % ordre.length), 12000);

// Formulaire : ouvre la messagerie
const form = document.querySelector("#formulaire");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const d = new FormData(form);
  location.href = `mailto:contact@adamgosmat.com?subject=${encodeURIComponent("Portfolio · message de " + d.get("nom"))}&body=${encodeURIComponent(d.get("message") + "\n\n" + d.get("nom") + " · " + d.get("email"))}`;
});
