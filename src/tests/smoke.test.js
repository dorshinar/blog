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

    await page.evaluate(() => window.__setPreferredTheme("dark"));
    const theme = await page.evaluate(() => window.__theme);

    await page.evaluate(() => window.__setPreferredTheme("light"));
    const newTheme = await page.evaluate(() => window.__theme);

    expect(theme).not.toBe(newTheme);
  });

  xit("shows title", async () => {
    await page.goto("http://localhost:8000/");

    const title = await page.title();
    expect(title).toBe("All posts | Dor Shinar");
  });
});
