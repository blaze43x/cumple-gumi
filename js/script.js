/* ========== Edita aquí ========== */
const PROFILE = {
  name: "Gumiho",
  initial: "G",
  photo: "img/Avatar Gumi.png",
};

const MESSAGES = [
  {
    from: "Abraham",
    text: "Feliz cumpleaños. Gracias por ser luz en los días normales y magia en los especiales. Te mereces lo mejor hoy y siempre.",
  },
  {
    from: "Amiga 1",
    text: "Que este año te regale risas, calma y todo lo que tanto deseas. ¡Feliz cumpleaños!",
  },
  {
    from: "Amigo 2",
    text: "Eres de esas personas que hacen que todo se sienta más cálido. Celebra en grande, te lo mereces.",
  },
  {
    from: "Amiga 3",
    text: "Por muchos más momentos juntos, más historias y más sonrisas. ¡Feliz día!",
  },
];
/* ================================ */

function setupProfile() {
  const title = document.querySelector(".title");
  const fallback = document.getElementById("avatarFallback");
  const photo = document.getElementById("profilePhoto");
  const wrap = document.querySelector(".avatar-wrap");

  if (title) title.textContent = `Hey, ${PROFILE.name}`;
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

function setupScrollButton() {
  const button = document.getElementById("scrollToMessages");
  const section = document.getElementById("messages");
  if (!button || !section) return;

  button.addEventListener("click", () => {
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setupProfile();
  renderMessages();
  setupScrollButton();
});
