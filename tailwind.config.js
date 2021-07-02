module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'sd-base03-brblack': '#002B36',
        'sd-base02-black': '#073642',
        'sd-base01-brgreen': '#586e75',
        'sd-base00-bryellow': '#657b83',
        'sd-base0-brblue': '#839496',
        'sd-base1-brcyan': '#93a1a1',
        'sd-base2-white': '#eee8d5',
        'sd-base3-brwhite': '#fdf6e3',
        'sd-yellow': '#b58900',
        'sd-orange': '#cb4b16',
        'sd-red': '#d30102',
        'sd-magenta': '#d33682',
        'sd-violet': '#6c71c4',
        'sd-blue': '#268bd2',
        'sd-cyan': '#2aa198',
        'sd-green': '#859900',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
