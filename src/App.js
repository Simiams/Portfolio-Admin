import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Navigate to="/simonConvert" />}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;


