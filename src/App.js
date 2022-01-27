import "./App.css";
import { Routes, Route, Outlet, Link } from "react-router-dom";

import Landing from "./pages/Landing";
import Form from "./pages/Form";

import Layout from "./components/Layout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path="form" element={<Form />} />
          {/* <Route path="dashboard" element={<Dashboard />} /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
