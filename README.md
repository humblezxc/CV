# Yaroslav Stopenchuk — CV

This repository contains my personal CV built as a responsive web page using **HTML**, **SCSS**, and **Vite**.  
You can preview it in the browser or generate a print-ready **A4 PDF** version using **Puppeteer**.

---

## 🧩 Tech stack

- **Vite** — for fast local development and preview
- **SCSS** — styling
- **Puppeteer** — for automated PDF generation

---

## 🚀 Run locally

### 1. Install dependencies
Make sure you have [Node.js](https://nodejs.org/) (v16 or newer) installed.

```bash
npm install
```

### 2. Start the local server
Run the Vite dev server to open your CV in the browser.

```bash
npm run dev
```
By default, it will be available at:

http://localhost:5173


## 🧾 Generate a PDF version

### 1. Run the Puppeteer script

```bash
node export-cv.js
```
🖨️ This will open your local CV page, capture it, and export it to
cv_Yaroslav_Stopenchuk.pdf (A4 format, full-bleed, no extra margins).
