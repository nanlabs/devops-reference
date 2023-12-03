import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';
import { VitePWA } from 'vite-plugin-pwa';

const { PORT = '3000' } = process.env;

const root = path.resolve(__dirname, 'src');

const vitePluginPWA = () =>
  VitePWA({
    registerType: 'autoUpdate',
    injectRegister: 'auto',
    devOptions: {
      enabled: true,
    },
    manifest: {
      name: 'k8s-tilt-dev-example',
      short_name: 'k8s-tilt-dev-example',
      description: 'k8s-tilt-dev-example',
      theme_color: '#ffffff',
      icons: [
        {
          src: '/pwa-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: '/pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
        {
          src: '/pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable',
        },
      ],
    },
  });

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint(), vitePluginPWA()],
  base: process.env.VITE_APP_BASE_URL,
  server: {
    host: '0.0.0.0',
    port: parseInt(PORT, 10),
  },
  resolve: {
    alias: {
      '@/': `${root}/`,
    },
  },
  esbuild: {
    loader: 'tsx',
    include: 'src/**/*.{ts,tsx,js,jsx}',
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
        '.ts': 'tsx',
      },
    },
  },
});
