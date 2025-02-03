import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.scss";

import { renderRoutes } from "./routes";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<HomeTemplate />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/list-movie" element={<ListMovie />} />
          </Route>
          
          <Route path="/admin" element={<AdminTemplate />}>
            <Route path="/admin/dashboard" element={<DashboardPage />} />
            <Route path="/admin/add-user" element={<AddUserPage />} />
          </Route> */}
          {renderRoutes()}
        </Routes>

        {/* <Route path="/auth" element={<AuthPage />} /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
