// Theme colors - Modern gradient theme with blues, purples, and teals
export const theme = {
  colors: {
    primary: {
      light: "from-blue-600 to-purple-600",
      dark: "from-blue-400 to-purple-400",
      bg: "bg-gradient-to-r from-blue-600 to-purple-600",
      text: "text-blue-600 dark:text-blue-400",
    },
    secondary: {
      light: "from-teal-500 to-cyan-500",
      dark: "from-teal-400 to-cyan-400",
      bg: "bg-gradient-to-r from-teal-500 to-cyan-500",
      text: "text-teal-600 dark:text-teal-400",
    },
    accent: {
      light: "from-indigo-500 to-pink-500",
      dark: "from-indigo-400 to-pink-400",
      bg: "bg-gradient-to-r from-indigo-500 to-pink-500",
      text: "text-indigo-600 dark:text-indigo-400",
    },
    background: {
      light: "bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50",
      dark: "bg-gradient-to-br from-slate-900 via-blue-950 to-purple-950",
      solid: "bg-white dark:bg-slate-900",
    },
    card: {
      light: "bg-white/80 dark:bg-slate-800/80",
      border: "border-slate-200 dark:border-slate-700",
      hover: "hover:border-blue-300 dark:hover:border-blue-600",
    },
    text: {
      primary: "text-slate-900 dark:text-slate-100",
      secondary: "text-slate-600 dark:text-slate-400",
      muted: "text-slate-500 dark:text-slate-500",
    },
  },
  gradients: {
    hero: "bg-gradient-to-br from-blue-600 via-purple-600 to-teal-600",
    card: "bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950",
    button:
      "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700",
  },
} as const;
