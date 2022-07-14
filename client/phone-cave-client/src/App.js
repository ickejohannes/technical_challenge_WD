import './App.css';
import { Route, Routes } from "react-router-dom"
import AllPhonesPage from "./pages/AllPhonesPage"
import PhoneDetailsPage from "./pages/PhoneDetailsPage"

function App() {
  return (
    <Routes>
      <Route
        path="/phones"
        element={<AllPhonesPage />}
      />
      <Route
        path="/phones/:phoneId"
        element={<PhoneDetailsPage />}
      />
    </Routes>
    
  );
}

export default App;
