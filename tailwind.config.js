/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}",
    "node_modules/daisyui/dist/**/*.js",
    "node_modules/react-daisyui/dist/**/*.js",
  ],
  plugins: [require("daisyui")],
  safelist: ["./src/components/Navbar.jsx"],

  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#496465", 

          secondary: "#9cacaa", 

          accent: "#ead5cf", 

          neutral: "#f5f6f5", 

          "base-100": "#ebebec", 

          info: "#bf9e97",

          // success: "#b9c2b5",

          // warning: "#dec9d0",

          // error: "#b91c1c",
        },
      },
    ],
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
};


