module.exports = {
  launch: {
    headless: process.env.CI === "true",
    ignoreDefaultArgs: ["--disable-extensions"],
    args: ["--no-sandbox"],
    executablePath: process.env.CI === "true" ? "google-chrome" : "chrome.exe"
  },
  server: process.env.CI && {
    command: "npm run serve",
    port: 9000,
    launchTimeout: 180000
  }
};
