import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Form_PGE from "./pages/Form_PGE";
function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Navigate to="/formulaire" />}/>
          <Route path="/formulaire" exact element={<Form_PGE />}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;


