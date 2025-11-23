import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import sitemap from '@astrojs/sitemap';


// https://astro.build/config
export default defineConfig({
  site: 'https://aplicacionesdeia.site/',
  integrations: [tailwind(), react(),sitemap()],
  redirects: {
    '/idea/agencia-viaje-com-ia/': '/idea/agencia-viaje-con-ia/',
    
  }
   
});