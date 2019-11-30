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

  it("navigates to post page", async () => {
    await page.click(
      '[href="/linting-your-react+typescript-project-with-eslint-and-prettier"]'
    );
    await page.waitForSelector('[data-p="home-link"]');

    // Ensure the title is set properly
    expect(await page.title()).toBe(
      "Linting Your React+Typescript Project With ESlint and Prettier | Dor Shinar"
    );

    // Ensure buy me a coffee link is shown
    expect(await page.$('[data-p="koFi"]')).not.toBeNull();

    // Ensure next link shows
    const next = await page.evaluate(() =>
      document.querySelector('[rel~="next"]').getAttribute("href")
    );
    expect(next).toBe("/i-am-a-great-developer");

    // Ensure contact links are available
    expect(await page.$('[data-p="contact"]')).not.toBeNull();
  });

  it("loads the rss.xml", async () => {
    const rss = await page.evaluate(async () => {
      const response = await fetch("/rss.xml");
      const text = await response.text();
      return text;
    });
    expect(rss).toInclude('<?xml version="1.0" encoding="UTF-8"?>');
  });
});
