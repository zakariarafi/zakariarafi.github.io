// Navigation and filters enhance a complete static page.
(() => {
  const toggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".academic-menu");
  if (toggle && menu) {
    toggle.hidden = false;
    menu.classList.add("menu-enhanced");
    const closeMenu = () => {
      toggle.setAttribute("aria-expanded", "false");
      menu.classList.remove("is-open");
    };
    toggle.addEventListener("click", () => {
      const open = toggle.getAttribute("aria-expanded") !== "true";
      toggle.setAttribute("aria-expanded", String(open));
      menu.classList.toggle("is-open", open);
    });
    menu.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
        closeMenu();
        toggle.focus();
      }
    });
  }
  const toolbar = document.querySelector(".content-filters");
  if (toolbar) {
    toolbar.hidden = false;
    const cards = [...document.querySelectorAll("[data-content-format]")];
    const status = document.querySelector("#content-status");
    toolbar.querySelectorAll("button").forEach((button) => {
      button.addEventListener("click", () => {
        const filter = button.dataset.filter;
        toolbar.querySelectorAll("button").forEach((item) => item.setAttribute("aria-pressed", String(item === button)));
        cards.forEach((card) => {
          card.hidden = filter !== "all" && card.dataset.contentFormat !== filter;
        });
        document.querySelectorAll("[data-content-group]").forEach((group) => {
          group.hidden = !group.querySelector("[data-content-format]:not([hidden])");
        });
        const count = cards.filter((card) => !card.hidden).length;
        status.textContent = count + (count === 1 ? " item" : " items") + " shown: " + button.textContent + ".";
      });
    });
  }
  const dialog = document.querySelector("#content-demo");
  if (dialog) {
    document.querySelectorAll("[data-demo-title]").forEach((button) => {
      button.addEventListener("click", () => {
        dialog.querySelector("#demo-title").textContent = button.dataset.demoTitle;
        dialog.querySelector("#demo-platform").textContent = button.dataset.demoPlatform + " · Demo preview";
        dialog.showModal();
      });
    });
    dialog.querySelectorAll("button").forEach((button) => button.addEventListener("click", () => dialog.close()));
    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) dialog.close();
    });
  }
  const sections = [...document.querySelectorAll(".academic-main section[id]")];
  if (sections.length && "IntersectionObserver" in window) {
    const links = [...document.querySelectorAll("[data-section-link]")];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          links.forEach((link) => {
            if (link.dataset.sectionLink === entry.target.id) link.setAttribute("aria-current", "location");
            else link.removeAttribute("aria-current");
          });
        });
      },
      { rootMargin: "-10% 0px -65% 0px" }
    );
    sections.forEach((section) => observer.observe(section));
  }
})();
