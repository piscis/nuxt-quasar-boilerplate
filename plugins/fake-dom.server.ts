import { JSDOM } from "jsdom";

const dom = new JSDOM(
  "<!DOCTYPE html><head></head><body><h1>FAKE DOM</h1></body></html>",
  {
    url: "https://example.org/",
    referrer: "https://example.com/",
    contentType: "text/html",
    includeNodeLocations: true,
    storageQuota: 10000000,
  }
);

const { XMLHttpRequest } = dom.window;
global.XMLHttpRequest = XMLHttpRequest;
// @ts-ignore
global.window = dom.window;
global.navigator = dom.window.navigator;
global.document = dom.window.document;
// @ts-ignore
global.FileList = dom.window.FileList;
global.File = dom.window.File;
global.getComputedStyle = dom.window.getComputedStyle;

export default defineNuxtPlugin((_nuxtApp): void => {});
