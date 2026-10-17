/**
 * StoryCast — main script
 *
 * Progressive enhancements only: every page's key content works
 * without JavaScript.
 */

// Strategy question (story page). The section is hidden in the HTML
// and only shown once this script runs, so it never appears broken.
const strategy = document.querySelector("[data-strategy]");

if (strategy) {
  const choices = strategy.querySelectorAll("[data-strategy-choice]");
  const answers = strategy.querySelectorAll("[data-strategy-answer]");

  choices.forEach((choice) => {
    choice.addEventListener("click", () => {
      const selected = choice.dataset.strategyChoice;

      choices.forEach((button) => {
        button.setAttribute("aria-pressed", String(button === choice));
      });

      answers.forEach((answer) => {
        answer.hidden = answer.dataset.strategyAnswer !== selected;
      });
    });
  });

  strategy.hidden = false;
}
