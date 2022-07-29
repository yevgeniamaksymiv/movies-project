import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CssBaseline, Container } from "@mui/material";
import Navigation from "./components/navigation";
import { Settings, Home, Recommend } from './pages';
function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Navigation />
      <Container maxWidth="xl">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="settings" element={<Settings />} />
        <Route path="settings" element={<Recommend />} />
      </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
