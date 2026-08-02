import { Routes, Route } from "react-router-dom";
import Principal from "./pages/Principal";
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Principal />} />
      <Route path="/profile/:id" element={<ProfilePage />} />
    </Routes>
  );
}

export default App;