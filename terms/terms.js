import applyTheme from "../utils/js/theme.js";

chrome.runtime.onMessage.addListener((message) => {
  if (message.action === "theme") {
    onLoad();
  }
});

document.addEventListener("DOMContentLoaded", onLoad);
async function onLoad() {
  const config = await chrome.storage.local.get(["theme", "firstTime"]);
  const mode = config?.theme || "light";
  const firstTime = config?.firstTime || false;
  if (firstTime) {
    const preferedTheme = getPreferedTheme();
    applyTheme(preferedTheme);
    chrome.storage.local.set({ firstTime: false, theme: preferedTheme });
  } else {
    applyTheme(mode);
  }
  document.body.style.backgroundColor = "var(--primary-color)";
}

function getPreferedTheme() {
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme:dark)").matches
  ) {
    return "dark";
  }
  return "white";
}
