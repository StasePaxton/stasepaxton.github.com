module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    typography: {
      default: {
        css: {
          blockquote: {
            color: '#494B67'
          },
          h2: {
            color: '#494B67'
          },
          strong: {
            color: '#494B67'
          }
        }
      }
    },
    extend: {
      colors: {
        'gold': '#C39C70',
        'white-smoke': '#F8F8F8',
        'border-gray': '#D2DBe0',
        'good-deeds-blue': {
          '100': '#D6E3F2',
          '500': '#266AB8'
        },
        'good-deeds-gray': {
          '200': '#F6F6F6',
          '300': '#5E6773',
          '500': '#6E7788'
        },
        'good-deeds-green': {
          '100': '#F3F9F3',
          '200': '#98BF98'
        },
        'good-deeds-orange': {
          '400': '#F2513A'
        },
        'good-deeds-red': {
          '100': '#FDE1DD'
        },
        'life-snapshot-blue': {
          '100': '#E2E8EB',
          '200': '#4283A7',
          '300': '#5282A4',
          '400': '#5081A6',
          '600': '#2C5776',
          '700': '#38627E',
          '800': '#2E5875',
          '900': '#3A627D'
        },
        'life-snapshot-gray': {
          '100': '#F4F4F4',
          '150': '#FAFAFA',
          '200': '#E2E8EB',
          '250': '#757474',
          '300': '#6B6A6A',
          '500': '#7C7B7B'
        },
        'life-snapshot-orange': {
          '400': '#E93E1E'
        },
        'vente-blue': {
          '300': '#526C85',
          '400': '#566F87',
          '700': '#4D6880',
          '800': '#4E687F',
          '900': '#3E4A60'
        },
        'vente-green': {
          '100': '#F7F4EE',
          '150': '#C3D2D3',
          '200': '#DCE5E3',
          '300': '#81A2A3',
          '400': '#ABBFBD'
        },
        'vente-orange': {
          '300': '#E99E4C',
          '400': '#DB650A'
        },
        'vente-tan': {
          '100': '#FBFAF7'
        }
      },
      fontSize: {
        '7xl': '5rem',
        '8xl': '6rem',
        '9xl': '7rem'
      }
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography')
  ],
}
