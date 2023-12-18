/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        'color-primary':'#01051e',
        "color-primary-light":'#020726',
        "color-primary-dark":'#010417',

      },
      fontFamily:{
        'heading':['Roboto Slab','serif']
      }
      
  },
  container:{
    center:true,
    padding:{
     DEFAULT:'20px',
     md:"50px"
    }
},
  },
  plugins: [],
}

