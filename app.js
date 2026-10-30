document.addEventListener("DOMContentLoaded", () => {
  const footer = document.querySelector(".site-footer");
  const eyebrow = footer?.querySelector(".eyebrow");

  if (eyebrow) {
    const year = new Date().getFullYear();
    eyebrow.textContent = `Benlin Press • ${year}`;
  }
});
