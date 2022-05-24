module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        green: "#4BC7C1",
        white: "#fff",
        grey: "#f4f4f4",
        gray: "#C4C4C4",
        red: "#ff0000",
        disabledGreen: "#98E4E0",
        teal: "#AFF1EE",
        brown: "#EBB376",
      },
    },
  },
  plugins: [require("daisyui")

],
};
