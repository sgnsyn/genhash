self.addEventListener("install", (event) => {
  event.waitUntil(initializeConfig());
});

async function initializeConfig() {
  const defaultConfig = {
    theme: "light",
    passwordConfig: {
      length: 12,
      specialCharacters: "on",
      numbers: "on",
    },
    view: "gen",
    hash: {
      hashType: "MD",
      CRC: "crc32",
      MD: "md5",
      "SHA-1": "sha1",
      "SHA-2": "sha256",
      "SHA2-512": "sha512",
      "SHA-3": "sha3-512",
      Keccak: "keccak512",
      SHAKE: "shake128",
    },

    hashInput: "",
    firstTime: true,
  };

  await chrome.storage.local.set(defaultConfig);
  chrome.tabs.create({ url: chrome.runtime.getURL("terms/terms.html") });
}

chrome.runtime.onMessage.addListener((message) => {
  // Just lisitening to prevent errors when there is no listener
});
