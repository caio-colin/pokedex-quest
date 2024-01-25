export const themes = {
  light: {
    theme: "light",
    body: { backgroundColor: "rgb(0,191,255)", textColor: "black" },
    container: {
      backgroundColor: "white",
      textColor: "black",
      borderColor: "#ccc",
      boxShadow: "rgba(0, 0, 0, 0.75)",
    },
    skeletonCard: {
      backgroundColor: "white",
      borderColor: "#ccc",
      baseColor: "#ebebeb",
      highlightColor: "#f5f5f5",
    },
    input: {
      textColor: "black",
      placeholderColor: "rgb(123, 123, 123)",
      animationColor: "rgba(0, 0, 0, 0.1)",
    },
    buttonDefault: {
      backgroundColor: "rgb(67, 132, 154)",
      backgroundColorActive: "rgb(67, 99, 154)",
      backgroundColorDisabled: "rgb(128, 134, 146)",
      textColor: "white",
      textColorDisabled: "#ccc",
    },
  },
  dark: {
    theme: "dark",
    body: { backgroundColor: "rgb(1,1,40)", textColor: "black" },
    container: {
      backgroundColor: "rgb(31, 31, 34)",
      textColor: "white",
      borderColor: "rgb(58,62,71)",
      boxShadow: "rgba(75, 74, 74, 0.75)",
    },
    skeletonCard: {
      backgroundColor: "rgb(31, 31, 34)",
      borderColor: "rgb(58,62,71)",
      baseColor: "rgb(20, 20, 20)",
      highlightColor: "rgb(31, 31, 34)",
    },
    input: {
      textColor: "white",
      placeholderColor: "rgb(126, 120, 120)",
      animationColor: "rgba(0, 0, 0, 0.1)",
    },
    buttonDefault: {
      backgroundColor: "rgb(1, 1, 81)",
      backgroundColorActive: "rgb(1, 1, 123)",
      backgroundColorDisabled: "rgb(42, 42, 42)",
      textColor: "white",
      textColorDisabled: "rgb(58, 62, 71)",
    },
  },
}
