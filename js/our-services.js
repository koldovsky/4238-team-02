handleDOMContentLoaded(); //запускає головну функцію одразу після завантаження

function handleDOMContentLoaded() {
  const observer = createObserver(); //створює спостерігача за певним елементом
  waitForTargetAndObserve(observer); //чекає на цей елемент щоб прикріпити спостерігача
}

function createObserver() {
  const options = {
    threshold: 0.2,
  }; //коли 20% елементу будуть видимі у вікні браузера спостерігач активується

  const observer = new IntersectionObserver(onIntersect, options);
  return observer;
}

function onIntersect(entries, observer) {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      showDiscountPopup(); //показує поп ап
      observer.unobserve(entry.target); //вимикає спостереження за елементом щоб не з'являлось ще раз
    }
  }
}

function waitForTargetAndObserve(observer) {
  //створює функцію яка приймає на вхід наш спостерігач
  const interval = setInterval(() => {
    //її завдання дочекатись появи елементу .our-services на сторінці і тоді--
    const target = document.querySelector(".our-services"); //--прикріпити спостерігач
    if (target) {
      observer.observe(target);
      clearInterval(interval);
    }
  }, 200); //таймер перевіряє кожні 200 мілісекунд чи html вже завантажив .our-services в DOM.
} //якщо не завантажив - повторює цикл, якщо завантажив то прикріплює спостерігач і зупиняє таймер.

function showDiscountPopup() {
  //функція викликає (показує нам) попап із знижкою
  const popup = document.getElementById("discount-popup"); //шукає елемент з id="discount-popup"
  if (!popup) return;

  const deadlineText = generateDeadlineText(); //повертає строку дедлайну, нижче згенеруємо текст
  const deadlineElement = document.getElementById("discount-deadline");
  if (deadlineElement) {
    deadlineElement.textContent = deadlineText;
  }

  popup.style.display = "block"; //показуємо попап

  const getButton = popup.querySelector(".discount-popup__get"); //кнопка GET
  if (getButton) {
    getButton.addEventListener("click", function () {
      const headerHero = document.getElementById("header-hero"); //якщо натискаємо, скролить в header-hero
      if (headerHero) {
        headerHero.scrollIntoView({ behavior: "smooth" });
      }
      popup.style.display = "none"; //ховається після скролу
    });
  }

  const closeButton = popup.querySelector(".discount-popup__close"); //кнопка close
  if (closeButton) {
    closeButton.addEventListener("click", function () {
      popup.style.display = "none"; //зникає після натискання close
    });
  }
}

function generateDeadlineText() {
  //генеруємо текст в строку дедлайну
  const deadline = new Date();
  deadline.setDate(deadline.getDate() + 1); //робимо дату завтрашньою
  deadline.setHours(18, 0, 0, 0); //встановлюємо фіксований час на 6 pm.

  const options = {
    //форматування дати в текст
    weekday: "short", //скорочено день тижня (Mon, Tue...)
    year: "numeric", //повний рік (2025, 2026...)
    month: "short", //скорочений місяць (May, Jun...)
    day: "numeric", //день місяця (28,29...)
    hour: "2-digit", //двох числовий формат години
    minute: "2-digit", //двох числовий формат хвилин
  };

  return deadline.toLocaleString("en-US", options); //перетворюємо в строку відповідно до налаштувань, стиль US (am, pm)
}
