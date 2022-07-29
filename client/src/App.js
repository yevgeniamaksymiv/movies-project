import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import Navigation from "./components/navigation";
import { Settings, Home } from './pages';
function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
