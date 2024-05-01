/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      sans:'system-ui sans-serif', 
    },    
    extend: {
      colors: {
        'white': '#ffffff',
        'white-200': '#e5e7eb',      
        'gray-100': '#f3f4f6',
        'gray-600': '#374151',
        'gray': '#6b7280', 
        'purple-900': '#3b0764', 
        'black':'#020617',           
        'purple':'#5b21b6',
        'purple-700':'#7e22ce',         
      },
    },
  },
       
  plugins: [],
}

