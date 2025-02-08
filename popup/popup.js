//----------------------------------------IMPORTS-------------------------------
import generatePassword from "../utils/js/password.js";
import applyTheme from "../utils/js/theme.js";
import copyToClipboard from "../utils/js/clipboard.js";

//----------------------------------------CONSTANTS-------------------------------
const DEFAULT_THEME = "light";
const DEFAULT_PASSWORD_CONFIG = {
  length: 12,
  specialCharacters: "on",
  numbers: "on",
};
const DEFAULT_VIEW = "gen";
const HASH_LIST = {
  CRC: ["crc32", "crc16"],
  MD: ["md5", "md4", "md2"],
  "SHA-1": ["sha1"],
  "SHA-2": ["sha256", "sha224"],
  "SHA2-512": ["sha512", "sha384", "sha512-256", "sha512-224"],
  "SHA-3": ["sha3-512", "sha3-384", "sha3-256", "sha3-224"],
  Keccak: ["keccak512", "keccak384", "keccak256", "keccak224"],
  SHAKE: ["shake128", "shake256"],
};

//----------------------------------------STATE-------------------------------
let hashConfig = {
  hashType: "CRC",
  CRC: "crc32",
  MD: "md5",
  "SHA-1": "sha1",
  "SHA-2": "sha256",
  "SHA2-512": "sha512",
  "SHA-3": "sha3-512",
  Keccak: "keccak384",
  SHAKE: "shake128",
};
let activeHash = "crc32";
let hashInput = "";
let hashedResult = "";

//----------------------------------------DOM ELEMENTS-------------------------------
const themeBtn = document.getElementById("mode-btn");
const genNavBtn = document.getElementById("nav-btn-gen");
const hashNavBtn = document.getElementById("nav-btn-hash");

const genResultView = document.querySelector(".gen-res-contianer");
const genConfigView = document.querySelector(".gen-config-container");

const hashResultView = document.querySelector(".hash-res-container");
const hashConfigView = document.querySelector(".hash-config-container");

const passwordDisplayElt = document.querySelector(".gen-output");
const copyPasswordBtn = document.getElementById("copy-btn-gen");

const passwordConfigBtns = document.querySelectorAll(".toggle-btn");
const spToggleBtn = document.getElementById("toggle-sp-btn");
const numToggleBtn = document.getElementById("toggle-num-btn");
const passwordLengthInp = document.getElementById("length-inp");
const generatePasswordBtn = document.getElementById("gen-btn");

const textInputElt = document.getElementById("hash-inp");
const hashPasswordBtn = document.getElementById("copy-btn-hash");

const hashOutputInp = document.getElementById("hash-output");
const hashVarientContainer = document.querySelector(".hash-mode-container");
const hashTypeBtns = document.querySelectorAll(".hash-type-btn");
const hashVariantBtns = document.getElementsByClassName("hash-mode");

const links = document.querySelectorAll(".links");

//----------------------------------------UTILITY FUNCTIONS-------------------------------
function toggleActive(elt, state) {
  if (state === "off") {
    elt.classList.remove("active");
  } else {
    elt.classList.add("active");
  }
}

function toggleHidden(elt, state) {
  if (state === "on") {
    elt.classList.remove("hidden");
  } else {
    elt.classList.add("hidden");
  }
}

function validateLength(length) {
  if (length == undefined) return 12;

  const intLength = Number(length);
  if (intLength > 32) {
    return 32;
  } else if (intLength < 4) {
    return 4;
  } else {
    return intLength;
  }
}

function formatHashOutput(str) {
  if (str.length < 27) {
    return str;
  }
  return `${str.slice(0, 11)}...${str.slice(str.length - 12, str.length)}`;
}

//----------------------------------------CONFIGURATION FUNCTIONS-------------------------------
async function loadConfig() {
  const config = await chrome.storage.local.get([
    "theme",
    "passwordConfig",
    "view",
    "hash",
    "hashInput",
  ]);
  const mode = config?.theme || DEFAULT_THEME;
  const passwordConfig = config?.passwordConfig || DEFAULT_PASSWORD_CONFIG;
  const view = config?.view || DEFAULT_VIEW;
  const hash = config?.hash || hashConfig;
  hashConfig = hash;
  hashInput = config.hashInput || "";
  activeHash = hash[hash.hashType];
  return { hashInput, mode, passwordConfig, view, hash };
}

function setPasswordConfig(passwordConfig) {
  const { specialCharacters, numbers, length } = passwordConfig;

  spToggleBtn.dataset.value = specialCharacters;
  numToggleBtn.dataset.value = numbers;
  passwordLengthInp.value = length;

  toggleActive(spToggleBtn, specialCharacters);
  toggleActive(numToggleBtn, numbers);
}

function updatePskConfig() {
  const specialCharacters = spToggleBtn.dataset.value;
  const numbers = numToggleBtn.dataset.value;
  const length = parseInt(passwordLengthInp.value);

  const passwordConfig = { length, specialCharacters, numbers };
  chrome.storage.local.set({ passwordConfig });
}

function setHashConfig(hash) {
  const { hashType } = hash;
  const hashTypeBtn = document.querySelector(`[data-name = '${hashType}']`);
  hashBtnHandler(null, hashTypeBtn);
}

function updateHashConfig() {
  const hashType = document.querySelector(".hash-type-btn.active").dataset.name;
  const hashVarient =
    document.querySelector(".hash-mode.active").dataset.variant;
  hashConfig.hashType = hashType;
  hashConfig[hashType] = hashVarient;
  activeHash = hashVarient;
  hashInputHandler();
  chrome.storage.local.set({ hash: hashConfig });
}

async function updateTheme(currentTheme) {
  chrome.storage.local.set({ theme: currentTheme });
}

//----------------------------------------VIEW MANAGEMENT FUNCTIONS-------------------------------
function togglePanelView(event, savedView = undefined) {
  let view;
  if (savedView == undefined) {
    const btn = event.target;
    view = btn?.dataset.view;
    chrome.storage.local.set({ view });
  } else {
    view = savedView;
  }

  if (view === "hash") {
    toggleHidden(genConfigView, "off");
    toggleHidden(genResultView, "off");

    toggleHidden(hashConfigView, "on");
    toggleHidden(hashResultView, "on");

    toggleActive(genNavBtn, "off");
    toggleActive(hashNavBtn, "on");
  } else {
    toggleHidden(genConfigView, "on");
    toggleHidden(genResultView, "on");

    toggleHidden(hashConfigView, "off");
    toggleHidden(hashResultView, "off");

    toggleActive(genNavBtn, "on");
    toggleActive(hashNavBtn, "off");
  }
}

//----------------------------------------EVENT HANDLERS-------------------------------
function themeChangeHandler() {
  const mode = themeBtn.dataset.mode;
  const newMode = mode === "light" ? "dark" : "light";

  themeBtn.dataset.mode = newMode;

  applyTheme(newMode);
  updateTheme(newMode);

  chrome.runtime.sendMessage({ action: "theme" });
}

function passwordConfigBtnHandler(event) {
  const btn = event.target;
  const value = btn.dataset.value;
  const newState = value === "on" ? "off" : "on";

  btn.dataset.value = newState;

  toggleActive(btn, newState);
  updatePskConfig();
  passwordGenHandler();
}

function passwordLengthInpHandler() {
  updatePskConfig();
  passwordGenHandler();
}

function passwordGenHandler() {
  const sp = spToggleBtn.dataset.value;
  const num = numToggleBtn.dataset.value;
  const length = passwordLengthInp.value;

  const validLength = validateLength(length);

  passwordLengthInp.value = validLength;
  passwordDisplayElt.textContent = generatePassword(validLength, sp, num);
}

function passCopyHandler() {
  const password = passwordDisplayElt.textContent;
  copyToClipboard(password);
}

function hashCopyHandler() {
  copyToClipboard(hashedResult);
}

function hashBtnHandler(event, btn = null) {
  if (btn == null) {
    btn = event.target;
  }
  const name = btn.dataset.name;
  hashTypeBtns.forEach((elt) => {
    elt.classList.remove("active");
  });
  btn.classList.add("active");
  const variantBtns = createHashVarient(HASH_LIST[name]);
  hashVarientContainer.innerHTML = "";
  hashVarientContainer.append(...variantBtns);

  const activeVarient = document.querySelector(
    `[data-variant='${hashConfig[name]}']`,
  );
  hashVariantHandler(null, activeVarient);
}

function hashVariantHandler(event, btn = null) {
  if (btn == null) {
    btn = event.target;
  }
  for (let elt of hashVariantBtns) {
    elt.classList.remove("active");
  }
  btn.classList.add("active");
  updateHashConfig();
}

function hashInputHandler() {
  const txt = textInputElt.value.trim();
  if (txt === "") {
    hashOutputInp.innerHTML = "";
    return;
  }
  const hash = HASH_FUNCTION[activeHash](txt);
  hashedResult = hash;
  hashOutputInp.innerText = formatHashOutput(hash);
  chrome.storage.local.set({ hashInput: txt });
}

function pageNavigationHanlder(event) {
  event.preventDefault();

  const id = event.target.dataset.id;
  const urls = {
    about: "about/about.html",
    terms: "terms/terms.html",
  };

  const url = urls[id];
  chrome.tabs.create({ url: chrome.runtime.getURL(url) });
}

//----------------------------------------DOM CREATION FUNCTIONS-------------------------------
function createHashVarient(variants) {
  let res = [];
  variants.forEach((variant) => {
    const btn = document.createElement("button");
    btn.classList.add("hash-mode");
    btn.dataset.variant = variant;
    btn.innerHTML = variant;
    btn.addEventListener("click", hashVariantHandler);
    res.push(btn);
  });
  return res;
}

//----------------------------------------INITIALIZATION-------------------------------
async function windowLoadHandler() {
  const { mode, passwordConfig, view, hash, hashInput } = await loadConfig();

  themeBtn.dataset.mode = mode;
  textInputElt.value = hashInput;

  hashInputHandler();
  applyTheme(mode);
  setPasswordConfig(passwordConfig);
  setHashConfig(hash);
  togglePanelView(null, view);
  passwordGenHandler();
}

//----------------------------------------EVENT LISTENERS-------------------------------
window.addEventListener("load", windowLoadHandler);
genNavBtn.addEventListener("click", togglePanelView);
hashNavBtn.addEventListener("click", togglePanelView);
themeBtn.addEventListener("click", themeChangeHandler);

generatePasswordBtn.addEventListener("click", passwordGenHandler);
passwordLengthInp.addEventListener("change", passwordLengthInpHandler);
copyPasswordBtn.addEventListener("click", passCopyHandler);
hashPasswordBtn.addEventListener("click", hashCopyHandler);
textInputElt.addEventListener("input", hashInputHandler);

passwordConfigBtns.forEach((btn) => {
  btn.addEventListener("click", passwordConfigBtnHandler);
});

hashTypeBtns.forEach((btn) => {
  btn.addEventListener("click", hashBtnHandler);
});

links.forEach((link) => {
  link.addEventListener("click", pageNavigationHanlder);
});

for (let btn of hashVariantBtns) {
  btn.addEventListener("click", hashVariantHandler);
}
