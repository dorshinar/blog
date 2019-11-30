describe("Smoke test site", () => {
  beforeAll(async () => {
    await page.setViewport({ width: 1920, height: 1080 });
  });

  it("loads the main page", async () => {
    await page.goto("http://localhost:8000/");

    // Ensure the header is clickable
    const header = await page.evaluate(() =>
      document.querySelector('[data-p="home-link"]').getAttribute("href")
    );
    expect(header).toBe("/");
  });

  it("switches themes", async () => {
    await page.goto("http://localhost:8000/");

    const theme = await page.evaluate(() => window.__theme);
    await page.evaluate(() =>
      document.querySelector(".react-toggle-track").click()
    );
    const newTheme = await page.evaluate(() => window.__theme);
    expect(theme).not.toBe(newTheme);
  });
});
