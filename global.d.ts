/// <reference types="jest" />

import * as puppeteer from "puppeteer";

declare global {
  const page: puppeteer.Page;
  const browser: puppeteer.Browser;
}
