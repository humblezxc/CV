const puppeteer = require("puppeteer");

// Base URL of the running dev server. Defaults to Vite's port; override via
// `CV_URL=http://127.0.0.1:5180 node export-cv.js` or `node export-cv.js <url>`.
const BASE = process.env.CV_URL || process.argv[2] || "http://127.0.0.1:5180";

const TARGETS = [
    { path: "/", out: "Yaroslav_Stopenchuk_CV.pdf", label: "designed" },
    { path: "/ats.html", out: "Yaroslav_Stopenchuk_CV_ATS.pdf", label: "ATS" },
];

// Strip the grey printed-URL annotations browsers add after links.
const HIDE_LINK_ANNOTATIONS = `
  @media print {
    a[href]::after, a[href]:after { content: none !important; display: none !important; }
    body::after { content: none !important; display: none !important; }
  }
`;

(async () => {
    const browser = await puppeteer.launch();
    try {
        for (const t of TARGETS) {
            const page = await browser.newPage();
            await page.goto(BASE + t.path, { waitUntil: "networkidle0" });
            await page.addStyleTag({ content: HIDE_LINK_ANNOTATIONS });
            await page.pdf({
                path: t.out,
                format: "A4",
                printBackground: true,
                margin: { top: "0cm", right: "0cm", bottom: "0cm", left: "0cm" },
            });
            await page.close();
            console.log(`Rendered ${t.label}: ${t.out}`);
        }
    } finally {
        await browser.close();
    }
})();
