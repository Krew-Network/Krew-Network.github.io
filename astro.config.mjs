// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://thekrew.network',
    redirects: {
        '/discord': {
            status: 301,
            destination: 'https://discord.gg/hdN2M5rnr3',
        },
        '/apply': {
            status: 301,
            destination: 'https://forms.gle/TFBiWd2Yev68h1Ea6',
        }
    }
})