import { transform } from 'next/dist/build/swc/generated-native';

 /** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens:{
      xs:"300px",
      sm:"375px",
      md:"768px",
      lg:"1200px"
    },
    container:{
      center:true,
      padding:{
        DEFAULT:"1rem",
        md:"2rem"
      },
    },
    extend: {
      fontFamily:{
          sans:'var(--font-sans)',
          serif:'var(--font-serif)',
          mono: 'var(--font-mono)', 
          doto: 'var(--font-doto)', 
      },
      animation:{
        "ping-large":"ping-large 1s ease-in-out infinite",
        "move-left":"move-left 1s linear infinite",
        "move-right":"move-right 1s linear infinite",
        "border-spin":'border-spin 7s linear infinite',
        "glow":'glow 1.5s infinite alternate',
      },
      keyframes:{
        'ping-large':{
          '75%,100%':{
            transform:'scale(3)',
            opacity:'0',
          }
        },
        "move-left":{
          '0%':{
            transform:'translateX(0%)'
          },
          '100%':{
            transform:'translateX(-50%)'
          }
        },
        "move-right":{
          '0%':{
            transform:'translateX(-50%)'
          },
          '100%':{
            transform:'translateX(0%)'
          }
        },
        "glow": {
          '0%': { boxShadow: '0 0 8px 2px #38bdf8' },
          '100%': { boxShadow: '0 0 8px 4px #6ee7b7' },
        },
        "border-spin":{
          '100%':{
            transform:'rotate(-360deg)',
          }
        }
      }
    },
  },
  plugins: [],
};
