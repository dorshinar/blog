describe("Smoke test site", () => {
  beforeAll(async () => {
    await page.setViewport({ width: 1920, height: 1080 });
  });

  beforeEach(async () => {
    await page.goto("http://localhost:8000/");
    await page.waitForSelector('[data-p="home-link"]');
  });

  it("loads the main page", async () => {
    // Ensure the header is clickable
    const header = await page.evaluate(() =>
      document.querySelector('[data-p="home-link"]').getAttribute("href")
    );
    expect(header).toBe("/");
  });

  it("switches themes", async () => {
    await page.evaluate(() => window.__setPreferredTheme("dark"));
    const theme = await page.evaluate(() => window.__theme);

    await page.evaluate(() => window.__setPreferredTheme("light"));
    const newTheme = await page.evaluate(() => window.__theme);

    expect(theme).not.toBe(newTheme);
  });

  it("shows title", async () => {
    const title = await page.title();

    expect(title).toBe("All posts | Dor Shinar");
  });

  it("navigates to github", async () => {
    await page.click('[data-p="github"]');
    expect(page.url()).toBe("https://github.com/dorshinar");
  });

  it("navigates to twitter", async () => {
    await page.click('[data-p="twitter"]');
    expect(page.url()).toBe("https://twitter.com/DorShinar");
  });

  it("navigates to linkedin", async () => {
    await page.click('[data-p="linkedin"]');
    expect(page.url()).toBe("https://www.linkedin.com/in/dor-shinar-82b00b144");
  });

  it("navigates to dev", async () => {
    await page.click('[data-p="dev"]');
    expect(page.url()).toBe("https://dev.to/dorshinar");
  });

  it("navigates to stack overflow", async () => {
    await page.click('[data-p="stack-overflow"]');
    expect(page.url()).toBe(
      "https://stackoverflow.com/users/3822311/dor-shinar"
    );
  });
});
