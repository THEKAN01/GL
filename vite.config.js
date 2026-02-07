import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Utilise './' si tu déploies dans un sous-dossier, sinon '/'
  server: {
    port: 3000, // Optionnel : force le port local à 3000
  },
  build: {
    outDir: 'dist', // Le dossier qui sera généré pour le déploiement
  }
})
