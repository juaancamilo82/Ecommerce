import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-yellow':'#FED700',
        'custom-dark': '#1f1f1f', 
        'custom-dark-blue': '#2F4155',
      },
      backgroundImage: {
        'gradient-to-l-custom': 'linear-gradient(to left, #ffffff, #8197b1)',
        'gradient-to-l-custom2':  'linear-gradient(to left, #848484, #cecece, #848484)',
       
      },
    },
  },  
  plugins: [
    require("@tailwindcss/typography"), 
    require("@tailwindcss/forms"), 
    require("daisyui")
  ],
};

export default config;
