import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'
import tailwindTypography from '@tailwindcss/typography'


export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        primary: colors.green
      }
    }
  },
  plugins: [],
  content: [
    'components/**/*.{vue,js,ts}',
    'pages/**/*.vue',
  ],
  tailwindcss: {
    config: {
      plugins: [tailwindTypography]
    }
  }
}
