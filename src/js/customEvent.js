/**
 * Custom event
 */
(() => {
  const event = new Event("myHappyCustomEvent");

  // Suscribe that event
  window.addEventListener(
    "myHappyCustomEvent",
    (e) => {
      myCustomCallback(e);
    },
    false
  );

  // Get p node in DOM
  const p = document.querySelector(".custom-event__p");
  p.textContent = `💤`;

  // Custom event callback
  function myCustomCallback(e) {
    console.log("🔔 myCustomCallback:", e);

    p.classList.add("bell");
    p.innerHTML = `🔔 Custom event called <strong>${e.type}</strong>! 🔔`;

    setTimeout(() => {
      p.classList.remove("bell");
      p.textContent = `💤`;
    }, 3000);
  }

  // Dispatch event on body click
  document.body.addEventListener("click", (e) => window.dispatchEvent(event));
})();
