/**
 * Custom event with custom data
 */
(() => {
  const customData = {
    description: "I❤️JavaScript",
  };

  // Create event
  const event = new CustomEvent("withCustomData", { detail: customData });

  // Subscribe that event
  window.addEventListener(
    "withCustomData",
    (e) => {
      myCustomCallbackWithCustomData(e);
    },
    false
  );

  // Get p node in DOM and init it
  const p = document.querySelector(".custom-event-with-custom-data__p");
  p.textContent = `💤`;

  // Custom event callback
  function myCustomCallbackWithCustomData(e) {
    console.log("🔔 myCustomCallbackWithCustomData:", e);

    p.classList.add("bell");
    p.innerHTML = `🔔 Custom event with custom data called <strong>${e.type}</strong>! 🔔<br /><br />Detail: ${e.detail.description}`;

    setTimeout(() => {
      p.classList.remove("bell");
      p.textContent = `💤`;
    }, 3150);
  }

  // Dispatch event on body click
  document
    .querySelector("button")
    .addEventListener("click", (e) => window.dispatchEvent(event));
})();
