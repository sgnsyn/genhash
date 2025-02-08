import applyTheme from "../utils/js/theme.js";

chrome.runtime.onMessage.addListener((message) => {
  if (message.action === "theme") {
    handleTheme();
  }
});

async function handleTheme() {
  const config = await chrome.storage.local.get(["theme"]);
  const mode = config?.theme;
  if (mode === undefined) {
    applyTheme("light");
  } else {
    applyTheme(mode);
  }
  document.body.style.backgroundColor = "var(--primary-color)";
}

handleTheme();
