(function () {
  window.Components = window.Components || {};

  window.Components.closing = {
    render(container, section) {
      const div = document.createElement("div");
      div.className = "section section-closing";
      div.innerHTML = `
        <p class="closing-text">${
          section.text || "Okay, now come back and tell me if you liked it."
        }</p>
        <p class="replay-btn" id="replay">${
          section.replayText || "Or click, if you want to watch it again."
        }</p>
        <p class="last-smile">:)</p>
      `;
      container.appendChild(div);
      return div;
    },

animate(tl, el) {
      // 1. Define the starting physical positions
      const startState = { opacity: 0, y: -20, rotationX: 5, skewX: "15deg" };
      
      // 2. Use fromTo to explicitly tell GSAP to end at opacity: 1
      tl.fromTo(el.querySelectorAll("p"), 
        startState, 
        { 
          duration: 1, 
          opacity: 1,          // <--- Forces it to become visible!
          y: 0,                // Returns to original position
          rotationX: 0, 
          skewX: "0deg", 
          stagger: 1.2 
        }
      )
      // 3. Enable replay button only after it becomes visible
      .set(el.querySelector("#replay"), { pointerEvents: "auto" })
      .to(el.querySelector(".last-smile"), {
        duration: 0.5, rotation: 90,
      }, "+=1");
    },
  };
})();
