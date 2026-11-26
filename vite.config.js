import { defineConfig } from 'vite';

export default defineConfig({
    base: '/Swastrajaya/',
    server: {
        host: '0.0.0.0',
        port: 5173,
        allowedHosts: true,
        proxy: {
            '/pocket-tts': {
                target: 'http://127.0.0.1:8000',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/pocket-tts/, '')
            }
        }
    }
});