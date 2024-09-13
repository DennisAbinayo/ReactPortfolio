import { memo } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import AppContent from "./components/AppContent";

const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default memo(App);
