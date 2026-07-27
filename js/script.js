/* ========== Edita aquí ========== */
const PROFILE = {
  name: "Gumiho",
  initial: "G",
  photo: "img/Avatar Gumi.png",
};

const MESSAGES = [
  {
    from: "Blaze43x",
    text: "Feliz cumpleaños hermana, espero que pases un gran día lleno de alegría y momentos que te hagan sonreir. Sabes que te quiero mucho y para ser sincero, eres de las personas más esperanzadores y fuertes que he conocido 💪✨.  Gracias de todo corazón por siempre escucharme, apoyarme y estar ahí cuando más lo necesitaba. Nuestra amistad es algo que valoro cada día y aunque no te hable de manera constante quiero que sepas que siempre puedes contar conmigo para cualquier cosa. Espero que vengan cosas increibles para ti en este nuevo año de vida",
  },
  {
    from: "Mitsuri",
    text: "【♡】Feliz cumpleaños, amiguita gumiho. No sabes lo feliz que me hace poder celebrar un año más de tu vida, aunque nos separe una pantalla. A veces la gente no entiende cómo se puede querer tanto a alguien que está al otro lado del mundo o de un chat, pero tú te has vuelto una pieza fundamental en mis días. Gracias por cada llamada, por cada mensaje, por aguantar mis dramas y por estar siempre ahí. Eres una persona increíble, con un corazón gigantesco y un talento único que ilumina cualquier lugar (y cualquier canal de voz). Te mereces todo lo bonito que tiene este mundo hoy y siempre. Disfruta muchísimo tu día, come pastel de mi parte y que cumplas muchos años más llena de salud y felicidad 【☆】",
  },
  {
    from: "Estrellita",
    text: "Feliz cumpleaños Gumi!!! Este día es muy especial porque una persona maravillosa como tú esta cumpliendo años. Gracias por todos los momentos que pudiste estar. Disfruta de este día como nunca y que sepas que te deseo lo mejor en este hermoso día. Gracias por los Karaokes y los dramas en vez en cuando.\nPs: enséñame a cantar xd Feliz Cumpleaños 🎂🥳",
  },
  {
    from: "PlaboSantiago",
    text: "Hola Gumi espero que te la pases mui bien por tu cumpleaños disfruta mucho tu día y cuídate mucho va feliz cumpleaños🎂            🦜",
  },
];
/* ================================ */

function setupProfile() {
  const nameEl = document.getElementById("profileName");
  const fallback = document.getElementById("avatarFallback");
  const photo = document.getElementById("profilePhoto");
  const wrap = document.querySelector(".avatar-wrap");

  if (nameEl) nameEl.textContent = PROFILE.name;
  if (fallback) fallback.textContent = PROFILE.initial || PROFILE.name.charAt(0);

  if (PROFILE.photo && photo) {
    photo.src = PROFILE.photo;
    photo.alt = `Foto de ${PROFILE.name}`;
    photo.addEventListener("load", () => {
      photo.classList.add("is-loaded");
      wrap?.classList.add("has-photo");
    });
    photo.addEventListener("error", () => {
      photo.classList.remove("is-loaded");
      wrap?.classList.remove("has-photo");
    });
  }
}

function renderMessages() {
  const grid = document.getElementById("messagesGrid");
  if (!grid) return;

  grid.innerHTML = MESSAGES.map(
    (msg) => `
    <article class="message-card">
      <p class="from">${escapeHtml(msg.from)}</p>
      <p class="body">${escapeHtml(msg.text)}</p>
    </article>
  `
  ).join("");
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

document.addEventListener("DOMContentLoaded", () => {
  setupProfile();
  renderMessages();
});
