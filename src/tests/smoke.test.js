const fs = require("fs");

const url = process.env.CI ? process.env.deployment : "http://localhost:8000/";

describe("Smoke test site", () => {
  beforeAll(async () => {
    await page.setViewport({ width: 1920, height: 1080 });
    fs.mkdirSync("screenshots");
  });

  beforeEach(async () => {
    await page.goto(url);
    await page.waitFor(() => document.title.includes("All posts | Dor Shinar"));
  });

  it("loads the main page", async () => {
    // Ensure the header is clickable
    const header = await getAttribute('[data-p="home-link"]', "href");
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

  async function getAttribute(selector, attribute) {
    return page.evaluate(
      ([selector, attribute]) =>
        document.querySelector(selector).getAttribute(attribute),
      [selector, attribute]
    );
  }

  it("navigates to github", async () => {
    const href = await getAttribute('[data-p="github"]', "href");
    expect(href).toBe("https://github.com/dorshinar");
  });

  it("navigates to twitter", async () => {
    const href = await getAttribute('[data-p="twitter"]', "href");
    expect(href).toBe("https://twitter.com/DorShinar");
  });

  it("navigates to linkedin", async () => {
    const href = await getAttribute('[data-p="linkedin"]', "href");
    expect(href).toBe("https://www.linkedin.com/in/dor-shinar-82b00b144");
  });

  it("navigates to dev", async () => {
    const href = await getAttribute('[data-p="dev"]', "href");
    expect(href).toBe("https://dev.to/dorshinar");
  });

  it("navigates to stack overflow", async () => {
    const href = await getAttribute('[data-p="stack-overflow"]', "href");
    expect(href).toBe("https://stackoverflow.com/users/3822311/dor-shinar");
  });

  it("navigates to post page", async () => {
    await page.click(
      '[href="/linting-your-react+typescript-project-with-eslint-and-prettier"]'
    );
    await page.waitFor(() => document.title.includes("Linting Your"));

    await page.screenshot({ path: "screenshots/navigates.png" });
    // Ensure the title is set properly
    expect(await page.title()).toBe(
      "Linting Your React+Typescript Project With ESlint and Prettier | Dor Shinar"
    );

    // Ensure buy me a coffee link is shown
    expect(await page.$('[data-p="koFi"]')).not.toBeNull();

    // Ensure next link shows
    const next = await getAttribute('[rel~="next"]', "href");
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

    // Ensure rss feed is set up correctly
    expect(rss).toInclude('<?xml version="1.0" encoding="UTF-8"?>');
    expect(rss).toInclude(
      "<title><![CDATA[Linting Your React+Typescript Project With ESlint and Prettier]]></title>"
    );
    expect(rss).toInclude(
      "<description><![CDATA[Lately we started a new project at work, written in React + Typescript. Of course, like any other project we wanted it to be automatically…]]></description>"
    );
    expect(rss).toInclude(
      "<link>https://dorshinar.me/linting-your-react+typescript-project-with-eslint-and-prettier</link>"
    );
    expect(rss).toInclude(
      '<guid isPermaLink="false">https://dorshinar.me/linting-your-react+typescript-project-with-eslint-and-prettier</guid>'
    );
    expect(rss).toInclude("<pubDate>Mon, 21 Jan 2019 20:00:00 GMT</pubDate>");
  });

  it("loads the sitemap.xml", async () => {
    const map = await page.evaluate(async () => {
      const response = await fetch("/sitemap.xml");
      const text = await response.text();
      return text;
    });

    expect(map).toInclude('<?xml version="1.0" encoding="UTF-8"?>');
    expect(map).toInclude("<urlset");
    expect(map).toInclude("</urlset>");
    expect(map).toInclude("<loc>https://dorshinar.me/</loc>");
    expect(map).toInclude(
      "<loc>https://dorshinar.me/themes-using-css-variables-and-react-context</loc>"
    );
  });

  it("has google site verification code", async () => {
    const content = await getAttribute(
      'meta[name="google-site-verification"]',
      "content"
    );

    expect(content).toBe("Y0r9c_KfP6Wl0eYoavd1q6mHA60nmGZKbRuQ3e43Cb8");
  });
});
