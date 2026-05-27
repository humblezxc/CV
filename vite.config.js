import { defineConfig } from 'vite'

export default defineConfig({
    // Dedicated port so the CV never collides with other local dev servers
    // (e.g. another Vite app on the default 5173). strictPort keeps it stable
    // so `npm run pdf` always renders this project.
    server: {
        host: true,
        port: 5180,
        strictPort: true,
        open: true,
    },
})
