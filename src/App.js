import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import TableReservation from "./pages/TableReservation";
import ConfirmationForm from "./pages/ConfirmationForm";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/reserve-table" element={<TableReservation />} />
      <Route path="/confirm-reservation" element={<ConfirmationForm />} />
    </Routes>
  );
}

export default App;
