const baseline = document.querySelector("#btn-baseline");
const leading = document.querySelector("#btn-leading");
const close = document.querySelectorAll(".snackbar-close-icon");
const baselineSnackbar = document.querySelector(".baseline");
const leadingSnackbar = document.querySelector(".leading");

close.forEach((closeBtn) => {
  closeBtn.addEventListener("click", (e) => {
    let parent = closeBtn.closest("div").className;
    switch (parent) {
      case "baseline":
        baselineSnackbar.style.display = "none";
        break;
      case "leading":
        leadingSnackbar.style.display = "none";
        break;
    }
  });
});

baseline.addEventListener("click", () => {
  leadingSnackbar.style.display = "none";
  baselineSnackbar.style.display = "flex";
  setTimeout(() => {
    baselineSnackbar.style.display = "none";
  }, 4000);
});
leading.addEventListener("click", () => {
  baselineSnackbar.style.display = "none";
  leadingSnackbar.style.display = "flex";
  setTimeout(() => {
    leadingSnackbar.style.display = "none";
  }, 4000);
});
