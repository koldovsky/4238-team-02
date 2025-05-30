(function () {
  let movingTipsInstance = null;

  class MovingTipsAccordion {
    constructor() {
      this.accordionItems = [];
      this.init();
    }

    init() {
      this.accordionItems = document.querySelectorAll(
        ".moving-tips__accordion-item"
      );

      if (this.accordionItems.length === 0) {
        return;
      }

      this.addEventListeners();
      this.closeAllItems();
    }

    addEventListeners() {
      this.accordionItems.forEach((item, index) => {
        const header = item.querySelector(".moving-tips__accordion-header");

        if (header) {
          header.addEventListener("click", (e) => {
            e.preventDefault();
            this.toggleItem(index);
          });

          header.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              this.toggleItem(index);
            }
          });

          header.setAttribute("tabindex", "0");
          header.setAttribute("role", "button");
          header.setAttribute("aria-expanded", "false");
        }
      });
    }

    toggleItem(index) {
      const item = this.accordionItems[index];
      if (!item) return;

      const isActive = item.classList.contains("active");
      const header = item.querySelector(".moving-tips__accordion-header");
      const content = item.querySelector(".moving-tips__accordion-content");
      const icon = item.querySelector(".moving-tips__accordion-icon");

      if (isActive) {
        this.closeItem(item, header, content, icon);
      } else {
        this.closeAllItems();
        this.openItem(item, header, content, icon);
      }
    }

    openItem(item, header, content, icon) {
      item.classList.add("active");

      if (header) {
        header.setAttribute("aria-expanded", "true");
      }

      if (content) {
        const scrollHeight = content.scrollHeight;
        content.style.maxHeight = scrollHeight + "px";
      }

      if (icon) {
        icon.style.transform = "rotate(45deg)";
      }
    }

    closeItem(item, header, content, icon) {
      item.classList.remove("active");

      if (header) {
        header.setAttribute("aria-expanded", "false");
      }

      if (content) {
        content.style.maxHeight = "0";
      }

      if (icon) {
        icon.style.transform = "rotate(0deg)";
      }
    }

    closeAllItems() {
      this.accordionItems.forEach((item) => {
        const header = item.querySelector(".moving-tips__accordion-header");
        const content = item.querySelector(".moving-tips__accordion-content");
        const icon = item.querySelector(".moving-tips__accordion-icon");

        this.closeItem(item, header, content, icon);
      });
    }
  }

  function initMovingTips() {
    const movingTips = document.querySelector(".moving-tips");
    if (movingTips && !movingTipsInstance) {
      movingTipsInstance = new MovingTipsAccordion();
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initMovingTips);
  } else {
    initMovingTips();
  }

  document.body.addEventListener("htmx:afterOnLoad", initMovingTips);
})();
