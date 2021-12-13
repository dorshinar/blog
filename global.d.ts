/// <reference types="jest" />

import * as puppeteer from "puppeteer";
import "jest-extended";

declare global {
  const page: puppeteer.Page;
  const browser: puppeteer.Browser;
}
