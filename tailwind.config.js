/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js}',
  ],
  theme: {
    extend: {},
    screens: {
      'desktop5' : {'max': '1500px'},
      'desktop4' : {'max': '1400px'},
      'desktop2' : {'max': '1200px'},
      'desktop3' : {'max': '1300px'},
      'desktop1' : {'max': '1100px'},
      'tab' : {'max': '1024px'},
      'responsivestart' : {'max': '1000px'},
      'mobile' : {'max': '800px'},
    },
    colors: {
      'bluebg' : '#709ec3',
      'blackbg' : '#161c21',
      'whitebg' : '#ffffff',
      'redbg' : '#bf0000',
      'greenhilaw' : '#c5d4ce',
      'greenhinog' : '#d5e8e6',
      'mainleft' : '#c5d4ce',
      'mainright' : '#d5e8e6',
    },
    fontFamily: {
      'Avalon' : ['Avalon Regular', 'sans-serif'],
      'AvalonB' : ['Avalon Bold', 'sans-serif'],
      'Questrial' : ['Questrial', 'sans-serif'],
    },
    fontSize: {
      'normaltext' : '20px',
      'headingtexts' : '50px',
      'mainh1' : '30px',
      'mainh1span' : '55px',
      'mainh1small' : '35px',
    },
    keyframes: {
      fadIn: {
        '0%': { opacity: '0' },
        '100%': { opacity: '1', display: 'block' },
      },
      fadInRight: {
        'from': { opacity: '0' , transform: 'translate3d(100%, 0, 0)'},
        '100%': { opacity: '1', transform: 'none' },
      },
      fadInLeft: {
        'from': { opacity: '0' , transform: 'translate3d(-100%, 0, 0)'},
        '100%': { opacity: '1', transform: 'none' },
      },
    },
    animation: {
      'animFadeIn': 'fadIn 3s linear',
      'animfadInRight': 'fadInRight 1s linear',
      'animfadInLeft': 'fadInLeft 1s linear',
    },
  },
  plugins: [],
}
